<!-- Please remove this file from your project -->
<template>
  <div class="product">
    <div class="text-center">
      <h4>TRENDING THIS WEEK</h4>
      <h1>Explore Our Product</h1>
    </div>
    <div v-if="loading" class="product__loading">
      <div class="loading"></div>
    </div>
    <div v-else class="product__desc">
      <router-link :to="`/detail/${item.id}`" v-for="(item, i) in product" :key="i" class="product__card">
        <div class="overflow-hidden">
          <img :src="item.img" alt="Discover Nuxt 3" class="mb-4" />
        </div>
        <Rating v-model="item.rating" :total="item.totalRating" />
        <p class="product__title1">{{ item.nameProduct }}</p>
        <p class="product__title3">Rp. {{ formatRupiah(item.price) }}</p>
        <div class="product__button">
          <button type="submit" class="button-shopping">
            <span class="material-icons">
            shopping_cart
            </span>
            Add to Cart
          </button>
        </div>
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
