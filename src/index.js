const assign = require('lodash.assign')
const Renderer = require('./renderers/canvas')

function Underline (el, options) {
  if (!el) {
    console.error('No element parameter defined')
  }

  const els = typeof el === 'string' ? document.querySelectorAll(el) : el

  if (!els.length) {
    console.error('No element found', el)
  }

  options = assign({}, {
    // [string auto|color value] the color the underline stroke should have,
    // if using auto the text color will be used
    strokeStyle: 'auto',
    // [string auto|int] if auto the position of the underline will equal the
    // line height, otherwise provide an integer representing the amount of
    // pixels from the top
    position: 'auto',
    // [string auto|int|null] the amount of whitespace between descenders and
    // the stroke, if auto is set it calculates the optimal masking, if int is
    // set that amount of masking is applied, if null is set no masking is
    // applied
    masking: 'auto',
    // [string auto|int] if auto the width of the underline equals the width of
    // the underlined text, otherwise provide an integer representing the width
    // of the underline
    width: 'auto',
    // [string auto|int] if auto the stroke is calculated, if it's an integer
    // that's the strokeWidth in pixels
    strokeWidth: 'auto'
  }, options)

  this.lines = []

  Array.from(els).map((el) => {
    this.lines.push(new Renderer(el, options))
  })

  window.addEventListener('resize', this.resize.bind(this))
}

Underline.prototype.resize = function () {
  this.lines.map(function (renderer) {
    renderer.resize()
  })
}

Underline.prototype.update = function () {
  this.lines.map(function (renderer) {
    renderer.update()
  })
}

Underline.prototype.destroy = function () {
  this.lines.map(function (renderer) {
    renderer.destroy()
  })
}

module.exports = Underline
