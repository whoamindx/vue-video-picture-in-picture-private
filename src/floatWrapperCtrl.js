export default class floatWrapperCtrl {
  constructor (width, height, node) {
      this.width = width
      this.height = height
      this.createFloatWrapper(node)
  }

  createFloatWrapper(node) {
    let mousePosition
    let offset = [0,0]
    let div
    let isDown = false

    const wrapper = window['float-wrapper-picture-in-picture']

    if(wrapper) wrapper.parentNode.removeChild(wrapper)

    div = document.createElement('div')
    div.id = 'float-wrapper-picture-in-picture'
    div.style.position = 'fixed'
    div.style.left = '0px'
    div.style.top = '0px'
    div.style.width = `${this.width}px`
    div.style.height = `${this.height}px`

    document.body.appendChild(div)

    div.appendChild(node.querySelector('#video'))

    div.addEventListener('mousedown', event => {
      isDown = true
      offset = [
        div.offsetLeft - event.clientX,
        div.offsetTop - event.clientY
      ]
    })

    const up = () => {
      isDown = false
    }
    document.addEventListener('mouseup', up)

    const move = event => {
      event.preventDefault()
      if (isDown) {
        mousePosition = {
          x: event.clientX,
          y: event.clientY
        }

        let left = (mousePosition.x + offset[0])
        let top = (mousePosition.y + offset[1])

        if (left >= 0 && left <= (window.innerWidth - this.width))
          div.style.left = `${left}px`

        if (top >= 0 && top <= (window.innerHeight - this.height))
          div.style.top = `${top}px`
      }
    }

    document.addEventListener('mousemove', move)
  }

}
