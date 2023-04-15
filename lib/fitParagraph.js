import fitArray from './fitArray.js'

export default (str, width, ratio) => {
  // Break string to lines so that the result fits nicely inside square.
  //
  // Parameters
  //   str
  //     a string
  //   width
  //     an integer, the square width in pixels.
  //   ratio
  //     optional number, width to height ratio of the result. Default 2.
  //
  // Return
  //   a string, containing HTML paragraph with inline style definitions.
  //

  if (!width) {
    // Produce something meaningful if width is forgotten
    width = 200
  }

  const lines = fitArray(str, ratio)

  // Find longest line
  const columns = lines.reduce((acc, line) => {
    return Math.max(acc, line.length)
  }, 0)

  if (columns === 0) {
    // Empty input
    return '<p></p>'
  }

  // Adjust font size to the width.
  const fontSize = (width / columns).toFixed(1)
  // Inline styles
  const style = 'padding: 0; margin: 0; line-height: 1em;' +
    'font-size: ' + fontSize + 'px;'
  // Construct paragraph
  return '<p style="' + style + '">' +
    lines.join('<br>') +
    '</p>'
}
