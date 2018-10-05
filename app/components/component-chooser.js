import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  tagName: 'ul',

  category: null,

  componentList: computed(function(){
    if (this.get('category') && this.get('components')) {
      return this.get('components').filterBy('hierarchy', this.get('category'));
    } else {
      return this.get('components');
    }
  })

});
