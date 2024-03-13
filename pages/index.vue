<template>
  <Product :product="product" :loading="isLoading" />
</template>

<script>
export default {
  name: 'Index',
  computed: {
    product() {
      return this.$store.state.product
    },
    isLoading() {
      return this.$store.state.isLoading
    },
  },
  mounted() {
    this.fetcProduct()
  },
  methods: {
    async fetcProduct () {
      await this.$store.dispatch('listProduct')
    }
  },
}
</script>
