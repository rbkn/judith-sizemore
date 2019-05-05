import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    //console.log('I want my current user Id ' + currentUserId);

    let currentUser = this.modelFor('user');
    //Silly design for 1:1 relationship, but couldn't find out how to peek a relationship record without already
    //having the id in the uri.  user-measurements currently need the same ids as users for this to work.
    let currentUserId = currentUser.get('id');

    return hash({
      currentUser: currentUser,
      measurements: this.get('store').peekRecord('user-measurement',  currentUserId)
    });
  }
});
