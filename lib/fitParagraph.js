
// Add measurement canvas
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
const referenceFontSize = 16 // px
const referenceLineHeight = 20 // px

export default (str, paragraphWidth, fontName, fontStyle) => {
  // Parameters:
  //   str
  //   paragraphWidth
  //   fontName
  //   fontStyle
  //
  // Return
  //   a HTMLElement
  //

  // Default name
  if (!fontName) {
    fontName = 'sans-serif'
  }

  // Default style
  if (!fontStyle) {
    fontStyle = ''
  }

  // Reset context font for measurement
  ctx.font = (fontStyle + ' ' + referenceFontSize + 'px ' + fontName).trim()
  // Compute measure
  const textMetrics = ctx.measureText(str)
  // Text width in the reference font size.
  const linearWidth = textMetrics.width

  // The question is: how many lines in order to match line width and
  // total height of the lines. Let us solve equations:
  //   totalHeight = numLines * lineHeight
  //   totalHeight = lineWidth
  //   linearWidth = lineWidth * numLines
  // Solve numLines:
  //   lineWidth = numLines * lineHeight
  //   <=> linearWidth / numLines = numLines * lineHeight
  //   <=> linearWidth = numLines^2 * lineHeight
  //   <=> numLines^2 = linearWidth / lineHeight
  //   <=> numLines = sqrt(linearWidth / lineHeight)
  // Because lines must be an integer round the number of lines to nearest int.
  // We do not need to round to ceiling because the font size will be
  // adjusted to fit the lines.
  const numLinesFraction = Math.sqrt(linearWidth / referenceLineHeight)
  const numLines = Math.round(numLinesFraction)
  const totalHeight = numLines * referenceLineHeight
  const lineWidth = numLinesFraction * referenceLineHeight

  // The next question is: how much to scale the font size in order for
  // each line to meet paragraphWidth.
  //   lineWidth * scale = paragraphWidth
  //   scale = paragraphWidth / lineWidth
  const scale = paragraphWidth / lineWidth

  const scaledFontSize = referenceFontSize * scale
  const scaledLineHeight = referenceLineHeight * scale
  // Prevent line heights higher than width. Can happen with short strings.
  const safeLineHeight = Math.min(scaledLineHeight, paragraphWidth)

  // Construct paragraph
  const p = document.createElement('p')
  p.style.width = paragraphWidth + 'px'
  p.style.padding = 0
  p.style.fontSize = (scaledFontSize).toFixed(1) + 'px'
  p.style.lineHeight = (safeLineHeight).toFixed(1) + 'px'
  // Fill
  p.innerHTML = str

  return p
}
