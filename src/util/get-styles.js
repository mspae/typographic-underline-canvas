var baselineRatio = require('./baseline-ratio')

module.exports = function getStyles (el) {
  var baselinePositionRatio = baselineRatio(el)
  const lineHeight = parseFloat(window.getComputedStyle(el, null)
    .getPropertyValue('line-height'))
  const fontFamily = window.getComputedStyle(el, null)
    .getPropertyValue('font-family')
  const fontSize = window.getComputedStyle(el, null)
    .getPropertyValue('font-size')
  const fontStyle = window.getComputedStyle(el, null)
    .getPropertyValue('font-style')
  const fontColor = window.getComputedStyle(el, null)
    .getPropertyValue('color')
  const width = el.getBoundingClientRect().width
  const height = el.getBoundingClientRect().height
  const parentWidth = el.parentNode.getBoundingClientRect().width

  const offsetLeft = el.offsetLeft
  const parentOffsetLeft = el.parentNode.offsetLeft
  const canvasLeft = parentOffsetLeft - offsetLeft
  const textIndent = offsetLeft - parentOffsetLeft

  return {
    lineHeight: lineHeight,
    width: width,
    height: height,
    parentWidth: parentWidth,
    fontColor: fontColor,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontStyle: fontStyle,
    baselinePositionRatio: baselinePositionRatio,
    canvasLeft: canvasLeft,
    textIndent: textIndent
  }
}
