export default function() {
  this.namespace = 'api';
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  this.get('/clothing-items');
  this.get('/clothing-items/:id');
  this.get('/sizes/:id');
  // this.get('/clothing-items/:id/sizes',(schema,request)=>{
  //   const sizeId = request.params.id;
  //   return schema.comments.where({sizeId:sizeId});
  // });
  // this.get('/clothing-items/:id/sizes/');
  // this.get('/clothing-items', () => {
  //   return {
  //     data: [
  //       {
  //         type: 'clothing-item',
  //         id: 1,
  //         attributes: {
  //           name: "Skirt",
  //         },
  //         relationships: {
  //           size: {
  //             data: {type: "size", id:1}
  //           }
  //         }
  //       },
  //       {
  //         type: 'clothing-item',
  //         id: 2,
  //         attributes: {
  //           name: "Shirt",
  //         }
  //       },
  //       {
  //         type: 'clothing-item',
  //         id: 3,
  //         attributes: {
  //           name: "Dress",
  //         }
  //       },
  //       {
  //         type: 'clothing-item',
  //         id: 4,
  //         attributes: {
  //           name: "Tie",
  //           size: {
  //             waistWidth: "33"
  //           }
  //         },
  //         relationships: {
  //           size: {
  //             data: [{type: "size", id:1}]
  //           }
  //         }
  //       }
  //     ]
  //   };
  // });
  // this.get('/clothing/:id', (schema, request) => {
  //   var id = request.params.id;
  //
  //   return schema.authors.find(id);
  // });
  this.get('/test', () => {
    return {
      data: [
        {
          name: 'thing one'
        },
        {
          name: 'thing two'
        },
      ]
    }
  });
  // this.get('/sizes', () => {
  //   return {
  //     data: [
  //       {
  //         type: 'clothing-item',
  //         id: 1,
  //         attributes: {
  //           waistWidth: "42",
  //           thighWidth: "12"
  //         }
  //       },
  //     ]
  //   };
  // });
}
