<!-- Please remove this file from your project -->
<template>
  <div class="product">
    <h1>Product List</h1>
    <div v-if="loading" class="product__loading">
      <div class="loading"></div>
    </div>
    <div v-else class="product__desc">
      <router-link :to="`/detail/${item.id}`" v-for="(item, i) in product" :key="i" class="product__card">
        <img :src="item.img" alt="Discover Nuxt 3" class="mb-4" />
        <p class="product__title1">{{ item.nameProduct }}</p>
        <p class="product__title2"><b>Color :</b> {{ item.variance.color }} <b>Size :</b> {{ item.variance.size }}</p>
        <p class="product__title3">Rp. {{ formatRupiah(item.price) }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    product: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    formatRupiah(value) {
      var reverse = value.toString().split('').reverse().join(''),
      ribuan = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join('.').split('').reverse().join('');
      return ' ' + ribuan;
    }
  }
}
</script>
