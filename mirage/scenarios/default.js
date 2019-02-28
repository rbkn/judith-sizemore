export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  // server.createList('post', 10);
  //server.createList('clothing-item', 10);


  server.loadFixtures('clothing-items');
  server.loadFixtures('sizes');
  server.loadFixtures('users');
}
