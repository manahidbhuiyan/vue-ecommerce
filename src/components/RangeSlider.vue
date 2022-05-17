<template>
  <range-slider
      class="slider"
      min="10"
      max="1000"
      step="10"
      v-model="sliderValue">
  </range-slider>
</template>

<script>
import RangeSlider from 'vue-range-slider'
// you probably need to import built-in style
import 'vue-range-slider/dist/vue-range-slider.css'

export default {
  data () {
    return {
      sliderValue: 50
    }
  },
  components: {
    RangeSlider
  }
}
</script>

<style lang="scss">
.slider {
  /* overwrite slider styles */
  width: 100%;
}
</style>
