import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default Component.extend({

  classNames: 'ui-demo',

  exampleContent: computed('codeContent', function(){
    return new htmlSafe(this.get('codeContent'));
  })
});
