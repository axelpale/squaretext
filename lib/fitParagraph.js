
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

  // Quote font names that have spaces
  if (fontName.indexOf(' ') >= 0) {
    fontName = '"' + fontName + '"'
  }

  // Prepare paragraph
  const p = document.createElement('p')
  p.style.width = paragraphWidth + 'px'
  p.style.padding = 0

  // Prepare for word and char counting.
  str = str.trim()
  // Count words, see https://stackoverflow.com/a/18679657/638546
  const charCount = str.length
  const wordCount = str.split(/\s+/).length
  // Deal trivial case: empty content
  if (wordCount === 0) {
    return p
  }

  // Reset canvas context font for measurement
  const contextFont = (fontStyle + ' ' + referenceFontSize + 'px ' + fontName)
  ctx.font = contextFont.trim()
  // Compute measure
  const textMetrics = ctx.measureText(str)
  // Text width in the reference font size. Increase a bit for robustness.
  const linearWidth = textMetrics.width

  // Single words might be better on a single line.
  if (wordCount === 1) {
    if (charCount <= 6) {
      // Short word
      const scale = paragraphWidth / linearWidth
      const scaledFontSize = referenceFontSize * scale
      const scaledLineHeight = referenceLineHeight * scale
      // Prevent font height higher than width
      const safeFontSize = Math.min(scaledFontSize, paragraphWidth)
      // Prevent line heights higher than width. Can happen with short strings.
      const safeLineHeight = Math.min(scaledLineHeight, paragraphWidth)
      // Construct paragraph
      p.style.fontSize = (safeFontSize).toFixed(1) + 'px'
      p.style.lineHeight = (safeLineHeight).toFixed(1) + 'px'
      // Fill
      p.innerHTML = str
      return p
    }

    // Single long word.
    p.style.hyphens = 'auto'
    p.style.overflowWrap = 'break-word'
  }

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
  const safeNumLines = (wordCount < 2 * numLines)
    ? Math.ceil(numLinesFraction)
    : numLinesFraction
  const lineWidth = safeNumLines * referenceLineHeight

  // The next question is: how much to scale the font size in order for
  // each line to meet paragraphWidth.
  //   lineWidth * scale = paragraphWidth
  //   scale = paragraphWidth / lineWidth
  const scale = paragraphWidth / lineWidth

  const scaledFontSize = referenceFontSize * scale
  const scaledLineHeight = referenceLineHeight * scale

  // Construct paragraph
  p.style.fontSize = (scaledFontSize).toFixed(1) + 'px'
  p.style.lineHeight = (scaledLineHeight).toFixed(1) + 'px'
  // Fill
  p.innerHTML = str

  return p
}
