export default (str, ratio) => {
  // Break a string to lines so that there are about as many characters per
  // row as there are lines, adjusted by ratio.
  //
  // Parameters
  //   str
  //     a string
  //   ratio
  //     optional number, width to height ratio of the result. Default 2.
  //
  // Return
  //   an array of string
  //

  if (!ratio) {
    ratio = 2
  }

  const len = str.length

  // Best square layout near square root of the number of characters.
  const columns = Math.ceil(Math.sqrt(ratio * len))
  const rows = Math.ceil(columns / ratio)

  const lines = []
  for (let i = 0; i < rows; i += 1) {
    const candidate = str.substring(i * columns, (i + 1) * columns)
    // TODO adjust white space
    if (candidate.length > 0) {
      lines.push(candidate)
    }
  }

  return lines
}
