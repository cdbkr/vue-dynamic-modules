import register from './register';

export default (name) => {
  return {
    created: function () {
      const store = this.$store;
      if (!(store && store.state && store.state[name])) {
        register(name, store);
      } else {
        console.log(`reusing module: ${name}`);
      }
    },
  }
};
