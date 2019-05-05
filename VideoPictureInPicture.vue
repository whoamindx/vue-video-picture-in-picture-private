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

    }
  },
  data() {
    return {
      name: 'Gabriel'
    }
  },
  methods: {
    createFloatWrapper(node) {
      let mousePosition
      let offset = [0,0]
      let div
      let isDown = false

      div = document.createElement('div')
      div.id = "float-wrapper"
      div.style.position = 'absolute'
      div.style.left = '0px'
      div.style.top = '0px'
      div.style.width = `${this.width}px`
      div.style.height = `${this.height}px`
      div.innerHTML = node

      document.body.appendChild(div)

      div.addEventListener('mousedown', event => {
        isDown = true
        offset = [
          div.offsetLeft - event.clientX,
          div.offsetTop - event.clientY
        ]
      })

      document.addEventListener('mouseup', () => {
        isDown = false
      })

      document.addEventListener('mousemove', event => {
        event.preventDefault()
        if (isDown) {
          mousePosition = {
            x: event.clientX,
            y: event.clientY
          }

          let left = (mousePosition.x + offset[0])
          let top = (mousePosition.y + offset[1])

          if (left >= 0 && left <= (document.body.offsetWidth))
            div.style.left = `${left}px`

          if (top >= 0 && top <= document.body.offsetWidth)
            div.style.top = `${top}px`
        }
      })
    }
  },
  mounted() {
    this.createFloatWrapper(this.$el.innerHTML)
    this.$el.innerHTML = ''
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
