import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  sessionUser: service('session-user'),
  model() {
    let currentUserId = this.get('sessionUser').user.get('id');
    console.log('I want my current user Id' + currentUserId);
    // The inclusion on user-measurement is built into serializer (backend)
    //Therefore {include: 'user-measurement'} is not needed here.
    this.store.findRecord('user',currentUserId)
        .then(userm=>{
          console.log('retrieved current user in user.js route ' + userm);
        }
    )
  }
});
