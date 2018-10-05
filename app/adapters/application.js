import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  namespace: 'data'
  // namespace: 'data',
  // pathForType: function(type) {
  //   return this._super(type) + '.json';
  // }
});
