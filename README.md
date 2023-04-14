# node-lib-template

This is a template for JavaScript libraries and packages written in [ES6](https://en.wikipedia.org/wiki/ECMAScript) in [StandardJS](https://standardjs.com/) style. The template aims to follow common practices of [Node.js package ecosystem](https://www.npmjs.com/) both in code structure and documentation.

## Usage

Either create a new repository via GitHub's *Use this template* feature or copy the files to your existing repository. Place your library files under `lib/` and refer them from the root `index.js`. Place your unit tests under `test/`

Install build dependencies:

    $ npm install

Validate your code:

    $ npm run lint

Test your code:

    $ npm test

## Release to NPM

To publish the library to [NPM](https://www.npmjs.com/), first remove `private: true` line from `package.json`. Then publish either directly with `npm publish` or use a release workflow that ensures code quality before publishing:

    $ npm run release

## Contribute

Pull requests and [bug reports](https://github.com/axelpale/node-lib-template/issues) are highly appreciated. Please test your contribution with the following scripts:

Run test suite:

    $ npm test

Run only linter:

    $ npm run lint

## License

[MIT](LICENSE)
