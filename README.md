# squaretext

This module takes a string of text and attempts to break it into lines so that it fits a square nicely. The square has width equal to height, and due to the symmetry, square objects are easy to roughly fit into other shapes such as circles or stars.

The main use case includes the labels of nodes in a network visualization. The nodes usually have a round shape and textual labels in various lengths. Therefore a piece of text composed into square will fit the node nicely.

## Install

```
> npm install squaretext
```

## Usage

Just do a simple function call:
```
> import squaretext
> squaretext.fitParagraph('Fit me inside a square', 200)
'<p style="padding: 0; margin: 0; line-height: 1em;font-size: 28.6px;">Fit me <br>inside <br>a squar<br>e</p>'
```

## API

### squaretext.fitArray(str[, ratio=2])

**Parameters:**

- str: a string
- ratio: optional number, ratio between line width and the number of lines.

**Return:** an array of strings

### squaretext.fitParagraph(str, width[, ratio=2])

**Parameters:**

- str: a string
- width: an integer, the paragraph width in pixels.
- ratio: optional number, ratio between line width and the number of lines.

**Return:** an array of strings

## Contribute

Pull requests and [bug reports](https://github.com/axelpale/squaretext/issues) are highly appreciated. Please test your contribution with the following scripts:

Install build dependencies:

    $ npm install

Validate your code:

    $ npm run lint

Test your code:

    $ npm test

## License

[MIT](LICENSE)
