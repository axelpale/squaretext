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
> fitParagraph('Fit me inside a square', 200)
'<p style="padding: 0; margin: 0; line-height: 1em;font-size: 28.6px;">Fit me <br>inside <br>a squar<br>e</p>'
```

## API

### squaretext.fitParagraph(str, width[, fontName[, fontStyle]])

Place the text into a paragraph and adjust the font size so that the text flows roughly into a square shape.

**Parameters:**

- str: a string
- width: an integer, the paragraph width in pixels.
- fontName: optional string, the font name. Default is 'sans-serif'.
- fontStyle: optional string, the font style. Default is ''.

**Return:** a paragraph HTMLElement


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
