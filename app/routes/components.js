import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(model) {
    // redirect if we aren't on an individual component route
    if (model.get('length') > 1) {
      this.transitionTo('index');
    }
  }
});
