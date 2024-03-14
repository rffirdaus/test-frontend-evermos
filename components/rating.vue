<template>
  <div class="rating">
    <span v-for="star in stars" :key="star" class="material-icons" :class="{ 'active': star <= rating }">star_rate</span>
    <p>{{ `(${total})` }}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      rating: this.value,
      stars: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    setRating(value) {
      this.rating = value;
      this.$emit('input', value);
    }
  }
};
</script>
