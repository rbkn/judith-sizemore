import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByName(param) {
      debugger;
      if (param !== '') {
        return this.store.query('clothing-items', { name: param }).then((filteredResults) => {
          return { query: param, results: filteredResults };
        });
      } else {
        return this.store.findAll('clothing-items').then((results) => {
          return { query: param, results: results };
        });
      }
    }
  }
});
