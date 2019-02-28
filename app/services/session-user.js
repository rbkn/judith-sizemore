import Service, {inject as service} from '@ember/service';
import RSVP from 'rsvp';
import { isEmpty } from '@ember/utils';

export default Service.extend({
  session: service('session'),
  store: service(),

  loadCurrentUser() {
    return new RSVP.Promise((resolve,reject) => {
      const userId = this.get('session.data.authenticated.user_id');
      if (!isEmpty(userId)) {
        this.get('store').findRecord('user', userId).then((user)=> {
          this.set('user', user);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});
