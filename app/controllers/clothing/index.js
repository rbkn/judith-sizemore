import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByName(param) {
      if (param !== '') {
        return this.store.query('clothing-item', { name: param }).then((filteredResults) => {
          console.log(filteredResults);
          console.log(param);
          return { query: param, results: filteredResults };
        });
      } else {
        return this.store.findAll('clothing-item').then((results) => {
          return { query: param, results: results };
        });
      }
    }
  }
});
