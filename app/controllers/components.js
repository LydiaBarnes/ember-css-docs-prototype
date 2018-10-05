import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({

  actions: {
    jumpToSection(section) {
      $('html, body').animate({
        scrollTop: $("#" + section.dasherize()).offset().top
      }, 1000);
    }
  }

});
