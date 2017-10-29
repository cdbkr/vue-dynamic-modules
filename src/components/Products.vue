<template>
  <div>
    Products
    <div>
      Items: {{items}}
    </div>  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import componentWidthDynamicModule from '../utils/componentWithDynamicModule';
  const name = 'products';
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
        min: 201,
        max: 300
      });
    },
  };
</script>
