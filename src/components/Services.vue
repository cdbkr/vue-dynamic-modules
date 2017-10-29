<template>
  <div>
    Services
    <div>
      Items: {{items}}
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import componentWidthDynamicModule from '../utils/componentWithDynamicModule';
  const name = 'services';
  export default {
    extends: componentWidthDynamicModule(name),
    computed: {
      ...mapState(name, {
        items: state => state.items
      })
    },
    methods: {
      ...mapActions(name, ['generate'])
    },
    mounted: function () {
      this.generate({
          min: 301,
          max: 400
        }
      );
    },
  };
</script>
