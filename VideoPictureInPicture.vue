<template>
  <div>
    <div class="layer"></div>
    <div v-if="youtube">
      <iframe src="https://www.youtube.com/embed/wJ01HfpTgOo" :width="width" :height="height" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div v-else-if="vimeo">
      <iframe src="https://player.vimeo.com/video/97475086" :width="width" :height="height" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import floatWrapperCtrl from './src/floatWrapperCtrl'

export default {
  props: {
    youtube: Boolean,
    vimeo: Boolean,
    width: {
      type: Number,
      default: 320
    },
    height: {
      type: Number,
      default: 180
    },
  },
  data() {
    return {
      floatWrapperCtrl: undefined
    }
  },
  methods: {
  },
  mounted() {
    this.floatWrapper = new floatWrapperCtrl(
      this.width,
      this.height,
      this.$el
    )
  }
}
</script>

<style>
  .layer {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
