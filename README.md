# squaretext

![squaretext sample](doc/squaretext_sample_lorem_ipsum_3x2.png?raw=true)

[![NPM version](https://img.shields.io/npm/v/squaretext?color=7FCD0F)](https://www.npmjs.com/package/squaretext)

This package takes a string of text and breaks it into lines so that it fits a square nicely. The square has width equal to height what makes it easy to place square-formatted text into shapes such as circles or stars without sacrificing readability.

The main use cases include the labels of nodes in a network visualization. The nodes usually have a round shape and textual labels in various lengths. Therefore a piece of text composed into square will fit the node nicely.

The package is designed for client-side web applications. It requires the browser to support [TextMetrics Web API](https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics).

## Install

```
> npm install squaretext
```

## Usage

Just do a simple function call:
```
> import fitParagraph from 'squaretext'
> fitParagraph('Fit me inside a square!', 200, 'Arial')
HTMLElement <p style="width: 200px; padding: 0; font-size: 42.3px; line-height: 52.9px;">Fit me inside a square!</p>
```

## API

### squaretext.fitParagraph(str, width[, fontName[, fontStyle]])

Place the text into a paragraph and adjust the paragraph font size and line height so that the text flows roughly into a square shape. The font dimensions are computed based on the given font family name and style.

**Parameters:**

- str: a string
- width: an integer, the paragraph width in pixels.
- fontName: optional string, the [font family name](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family). Names containing whitespace should be quoted, for example `"Comic Sans MS"`. The default is `sans-serif`.
- fontStyle: optional string, the [font style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) e.g `italics`. Default is an empty string.

**Return:** HTMLElement, the paragraph element with inline styles.


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
