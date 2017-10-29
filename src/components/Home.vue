<template>
  <div>
    Home
    <div>
      Items: {{items}}
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import componentWidthDynamicModule from '../utils/componentWithDynamicModule';
  const name = 'home';
  export default {
    extends: componentWidthDynamicModule(name),
    computed: {
      ...mapState(name, {
        items: state => state.items
      })
    },
    computed: {
      ...mapState(name, {
        items: state => state.items
      })
    },
    methods: {
      ...mapActions(name, ['generate'])
    },
    mounted: function () {
      this.generate();
    },
  };
</script>
