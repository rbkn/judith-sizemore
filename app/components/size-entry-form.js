import Component from '@ember/component';

export default Component.extend({
  actions: {
    update() {
      let measurements = this.get('measurements');
      measurements.save().then(() => {
        console.log('measurements attempted an update.')
      });
    }
  }
});
