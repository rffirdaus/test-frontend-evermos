<template>
  <Detail :detail="detail" :loading="isLoading" />
</template>

<script>
export default {
  name: "Detailindex",
  computed: {
    detail() {
      return this.$store.state.detail;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  mounted() {
    this.fetcDetail();
  },
  methods: {
    async fetcDetail() {
      await this.$store.dispatch("getDetail", this.$route.params.id)
    },
  },
};
</script>
