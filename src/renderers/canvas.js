const baseline = require('font-baseline')
const detectZoom = require('detect-zoom')

function Canvas (el, options) {
  const elStyles = window.getComputedStyle(el, null)
  this.el = el
  this.fontMetrics = baseline(el)
  this.options = options

  this.canvas = document.createElement('canvas')
  this.canvas.className = 'underline-canvas'
  this.ctx = this.canvas.getContext('2d')
  this.ratio = detectZoom.device()

  this.canvas.width = elStyles.width * this.ratio
  this.canvas.height = elStyles.height * this.ratio

  this.canvas.style.position = 'absolute'
  this.el.appendChild(this.canvas)

  this.updateText()
  this.resize()
}

Canvas.prototype.measureOffset = function() {
  this.offsetTop = this.el.children[0].getBoundingClientRect().top +window.scrollY
}

Canvas.prototype.resizeCanvas = function () {
  const boundingBox = this.el.getBoundingClientRect()
  this.canvas.width = boundingBox.width * this.ratio
  this.canvas.height = (boundingBox.height * this.ratio)
  this.ctx.scale(this.ratio, this.ratio)
  this.ctx.lineJoin = 'round'
  this.canvas.style.left = '0px'
  this.canvas.style.width = `${boundingBox.width}px`
  this.canvas.style.height = `${boundingBox.height}px`
  this.canvas.style.top = `${this.offsetTop}px`
  this.canvas.style.left = `${boundingBox.left}px`
  this.canvas.style.zIndex = '-2'
  this.canvasOffset = boundingBox.left
}

Canvas.prototype.resize = function () {
  this.measureSpace()
  this.measureOffset()
  this.resizeCanvas()
  this.updateLines()
  this.render()
}

Canvas.prototype.updateText = function () {
  const text = this.el.textContent.split(/\s/).map((word) => {
    return `<span class="underline-word">${word}</span> `
  })
  const canvas = this.el.querySelector('.underline-canvas')
  this.el.innerHTML = ''
  this.el.innerHTML = text.join(' ')
  if (canvas) this.el.appendChild(canvas)
}

Canvas.prototype.measureSpace = function () {
  const space = document.createElement('span')
  space.innerHTML = '&nbsp;'
  this.el.appendChild(space)
  this.spaceWidth = space.getBoundingClientRect().width
  space.remove()
}

Canvas.prototype.updateLines = function () {
  let lines = []
  let currentLine = {
    text: '',
    begin: null,
    end: 0
  }
  Array.from(this.el.children).map((word, i) => {
    if (word.className.indexOf('underline-word') === -1) return

    currentLine.begin = currentLine.begin === null
      ? word.getBoundingClientRect().left - this.canvasOffset
      : currentLine.begin

    currentLine.end += word.getBoundingClientRect().width
    currentLine.text += word.textContent

    if (!this.el.children[i + 2] || this.el.children[i + 1].getBoundingClientRect().top > word.getBoundingClientRect().top) {
      // end of line
      currentLine.top = word.getBoundingClientRect().top + window.scrollY
      currentLine.end += currentLine.begin

      lines.push({
        begin: currentLine.begin,
        end: currentLine.end,
        top: currentLine.top,
        text: currentLine.text
      })
      currentLine.text = ''
      currentLine.begin = null
      currentLine.end = 0
    } else {
      // more to come on this line
      currentLine.end += this.spaceWidth
      currentLine.text += ' '
    }
  })
  this.lines = lines
}

Canvas.prototype.render = function () {
  const boundingBox = this.el.getBoundingClientRect()
  const elStyles = window.getComputedStyle(this.el, null)
  const fontMetrics = this.fontMetrics
  const ctx = this.ctx
  const font = ctx.font = `${elStyles.fontStyle} ${elStyles.fontSize} ${elStyles.fontFamily}`
  const strokeWidth = (this.options.strokeWidth === 'auto')
    ? this.ctx.measureText('.').width / 6
    : this.options.strokeWidth * this.ratio

  const strokeStyle = (this.options.strokeStyle === 'auto')
    ? elStyles.color
    : this.options.strokeStyle

  const masking = (this.options.masking !== null)
    ? (this.options.masking === 'auto')
      ? this.ctx.measureText('.').width / 2
      : this.ratio * this.options.masking
    : false

  this.lines.map(drawLine.bind(this))

  function drawLine (line, index) {
    const maskY = fontMetrics.line * index
    const baselineY = (index + 1) * fontMetrics.line - fontMetrics.offset - fontMetrics.baseline
    const lineY = (this.options.position === 'auto')
      ? baselineY + fontMetrics.baseline * 0.6180339887
      : baselineY + this.options.position / this.ratio

    console.log(line.text, fontMetrics);

    ctx.lineWidth = strokeWidth < 1
      ? 1
      : parseInt(strokeWidth, 10)

    ctx.strokeStyle = strokeStyle
    ctx.beginPath()
    ctx.moveTo(line.begin, parseInt(lineY, 10))
    ctx.lineTo(line.end, parseInt(lineY, 10))
    ctx.globalCompositeOperation = 'source-over'
    ctx.stroke()
    ctx.closePath()

    if (!masking) return

    ctx.globalCompositeOperation = 'destination-out'
    ctx.font = font
    ctx.fillStyle = 'green'
    ctx.textBaseline = 'top'
    ctx.fillText(line.text, parseInt(line.begin, 10), parseInt(maskY, 10))
    ctx.lineWidth = parseInt(masking, 10)
    ctx.strokeStyle = 'blue'
    ctx.strokeText(line.text, parseInt(line.begin, 10), parseInt(maskY, 10))
  }

}

module.exports = Canvas
