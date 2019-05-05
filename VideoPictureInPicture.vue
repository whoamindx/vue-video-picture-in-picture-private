<template>
  <p>Hello {{name}}</p>
</template>

<script>


let mousePosition
let offset = [0,0]
let div
let isDown = false

div = document.createElement('div')
div.style.position = 'absolute'
div.style.left = '0px'
div.style.top = '0px'
div.style.width = '100px'
div.style.height = '100px'
div.style.background = 'red'
div.style.color = 'blue'

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



export default {
  data() {
    return {
      name: 'Gabriel'
    }
  }
}
</script>

<style>

</style>
