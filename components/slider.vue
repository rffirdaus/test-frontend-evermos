<template>
  <div v-if="images.length === 0" class="product__loading">
    <div class="loading"></div>
  </div>
  <div v-else>
    <div class="slider">
      <div v-for="(image, index) in images" :key="index" class="overflow-hidden" :class="{ 'active': index === currentIndex }">
        <img :src="image.src">
      </div>
      <button @click="prevSlide">
        <span class="material-icons">arrow_back_ios</span>
      </button>
      <button @click="nextSlide">
        <span class="material-icons">arrow_forward_ios</span>
      </button>
    </div>
    <div class="flex mr-8">
      <div v-for="(image, index) in images" :key="index" class="mr-2">
        <img class="detail__img-icon" :class="{ 'border-active': index === currentIndex }" :src="image.src" @click="galeryClick(index)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    galeryClick(index) {
      this.currentIndex = index
    }
  }
};
</script>
