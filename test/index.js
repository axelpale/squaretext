import { default as test } from 'tape'
import * as lib from '../index.js'

test('basic fitArray', (t) => {
  const arr = lib.fitArray('Fit me inside a square')
  const ref = ['Fit me ', 'inside ', 'a squar', 'e']
  t.deepEqual(arr, ref, 'should generate array')

  t.end()
})

test('basic fitParagraph', (t) => {
  const p = lib.fitParagraph('Fit me inside a square', 200)
  const html = '<p style="padding: 0; margin: 0; line-height: 1em;font-size: 28.6px;">Fit me <br>inside <br>a squar<br>e</p>'
  t.equal(p, html, 'should generate p tag')

  t.end()
})
