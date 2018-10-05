
var dss = require('dss');

module.exports = function(grunt) {

  grunt.initConfig({
    documentation: {
      docs: {
        files: {
          'mirage/fixtures/components.js': 'app/styles/component-library/**/*.{css,scss,sass}'
        },
        options: {
          // Our custom parser tags, do not remove
          parsers: {
            'section': function(i, line, block) {
              return line;
            }
          }
        }
      }
    }
  });

  // Custom JSON output for component library using DSS parser
  // Based heavily on grunt-dss, with modifications

  grunt.registerMultiTask('documentation', 'Generate parsed CSS into a JSON fixture', function() {

    var promise = this.async();

    // Merge options
    var options = this.options({});

    // Overwrite default parser for description so that it accepts multiple lines
    dss.parser('description', function(i, line, block){

      var markup = "";
          lines = block.split('\n @');

      lines.forEach(function(line){
        words = line.split(' ');
        if (words.shift() == 'description') {
          markup = words.join(' ');
        }
      });

      return markup;
    });

    // Execute other custom parsers
    for (var key in options.parsers) {
      dss.parser(key, options.parsers[key]);
    }

    // Object to contain the parsed data of each file
    var parsedData = [];

    // Create JSON
    this.files.forEach(function(f) {

      // Concat specified files
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set)
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      // Combine all stylesheet content
      }).map(function(filepath) {
        // Use DSS to parse the stylesheet comments and save to specified JSON file
        dss.parse(grunt.file.read(filepath), {}, function(parsed) {
          // Add only parsed blocks with content, so undocumented files are skipped
          if (parsed.blocks.length) {
            var data = {};
            // Pull the actual filename out of the filepath and add to parsed data
            var path = filepath.split('/');
            data.id = path[path.length-1].split('.')[0];
            data.hierarchy = path[path.length-2];
            data.name = parsed.blocks[0].name;
            data.description = parsed.blocks[0].description;
            // We no longer need the first block
            data.blocks = parsed.blocks.slice(1, parsed.blocks.length);
            parsedData.push(data);
          }
        });
      });

      var fixture = "export default " + JSON.stringify(parsedData, null, "\t") + ";";
      grunt.file.write(f.dest, fixture);
      grunt.log.writeln('Library data successfully copied to ' + grunt.log.wordlist([f.dest], {color: 'cyan'}));
      promise();
    });
  });
};
