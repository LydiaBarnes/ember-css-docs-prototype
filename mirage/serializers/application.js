import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  namespace: 'data'
  // namespace: 'data',
  // pathForType: function(type) {
  //   return this._super(type) + '.json';
  // }
});
