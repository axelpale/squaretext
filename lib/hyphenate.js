export default function hyphenate (str, n) {
  // Add silent hyphens after each n characters.
  //
  const l = str.length // 9, n = 4
  const numParts = Math.ceil(l / n) // 3

  const parts = []
  for (let i = 0; i < numParts; i += 1) {
    parts.push(str.substring(i * n, (i + 1) * n))
  }

  return parts.join('&shy;')
}
