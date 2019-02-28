import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  //TODO: Can we separate application and index controllers same as for ember-simple-auth?
  // session would then be in index... not application
  session: service(),

  actions: {
    transitionToLoginRoute() {
      this.transitionToRoute('login');
    }
  }
});
