<template>
  <div class="detail">
    <div v-if="loading" class="product__loading">
      <div class="loading"></div>
    </div>
    <div v-else>
      <router-link to="/" class="detail__router">
        <i class="material-icons">arrow_back</i>
        <p>Back to list</p>
      </router-link>
      <div class="detail__desc">
        <div class="responsive-mobile1">
          <ImageSlider :images="sliderImages" />
        </div>
        <div class="responsive-mobile2">
          <p class="detail__title1">{{ nameProduct }}</p>
          <p class="detail__title2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            similique neque. Minus qui, cupiditate natus fugiat iusto aperiam
            quae fuga! Incidunt id ipsa voluptate unde odit voluptatibus,
            impedit architecto molestias!
          </p>
          <Rating v-model="rating" :total="totalRating" />
          <p class="detail__title3">Rp. {{ formatRupiah(price) }}</p>
          <p class="detail__title4">Selected Size</p>
          <div class="detail__variance">
            <div v-for="(size, i) in variance.size" :key="i" class="detail__selected--size" :class="selectedSize === size ? 'border-active' : ''" @click="selectedButton(size)">
              <p class="detail__title4">{{ size }}</p>
            </div>
          </div>
          <div class="detail__button">
            <button type="submit" class="button-cart">
              Add to Cart
            </button>
            <button type="submit" class="button-shopping">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageSlider from "~/components/slider.vue";
export default {
  name: "Detail",
  props: {
    detail: {
      type: Object,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ImageSlider,
  },
  data() {
    return {
      rating: 0,
      totalRating: 0,
      nameProduct: '',
      price: 0,
      variance: '',
      sliderImages: [],
      selectedSize: 39
    };
  },
  watch: {
    detail(data) {
      if (data) {
        this.sliderImages = [
          { src: data.imgDetail1 },
          { src: data.imgDetail2 },
          { src: data.imgDetail3 },
        ];
        this.rating = data.rating
        this.totalRating = data.totalRating
        this.price = data.price
        this.variance = data.variance
        this.nameProduct = data.nameProduct
      }
    }
  },
  methods: {
    formatRupiah(value) {
      var reverse = value.toString().split('').reverse().join(''),
      ribuan = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join('.').split('').reverse().join('');
      return ' ' + ribuan;
    },
    selectedButton(value) {
      this.selectedSize = value
    }
  },
};
</script>
