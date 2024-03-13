<template>
  <div class="slider">
    <div v-for="(image, index) in images" :key="index" :class="{ 'active': index === currentIndex }">
      <img :src="image.src">
    </div>
    <button @click="prevSlide">
      <span class="material-icons">arrow_back_ios</span>
    </button>
    <button @click="nextSlide">
      <span class="material-icons">arrow_forward_ios</span>
    </button>
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
    }
  }
};
</script>
