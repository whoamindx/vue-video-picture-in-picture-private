<template>
  <div>
    <slot></slot>
    <div id="video" v-if="slotClicked">
      <div class="layer"></div>
      <div v-if="youtube">
        <iframe :src="'https://www.youtube.com/embed/'+id" :width="width" :height="height" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div v-else-if="vimeo">
        <iframe :src="'https://player.vimeo.com/video/'+id" :width="width" :height="height" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import floatWrapperCtrl from './src/floatWrapperCtrl'

export default {
  props: {
    youtube: Boolean,
    id: String,
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
      floatWrapperCtrl: undefined,
      slotClicked: false
    }
  },
  methods: {
  },
  mounted() {
    this.$slots.default[0].elm.addEventListener('click', () => {
      if(!window['float-wrapper-picture-in-picture'])
        this.slotClicked = true
    })
  },
  watch: {
    slotClicked() {
      setTimeout(() => {
        this.floatWrapperCtrl = new floatWrapperCtrl(
          this.width,
          this.height,
          this.$el
        )
      }, 100)
    }
  }
}
</script>

<style>
  .layer {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #video {
    position: absolute;
  }
</style>
