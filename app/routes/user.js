import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let currentUserId = params.user_id;
    //console.log('I want my current user Id ' + currentUserId);
    // The inclusion on user-measurement is built into serializer (backend)
    //Therefore {include: 'user-measurement'} is not needed here.
    return this.store.findRecord('user',currentUserId);
  }
});
