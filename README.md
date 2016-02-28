# typographic-underline-canvas

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


    Typographically correct underline for the web.

This project was inspired by [underline.js](http://underlinejs.org/) and [smart-underline](https://www.npmjs.com/package/smart-underline).

This library includes the NPM packages [detect-zoom](https://www.npmjs.com/package/detect-zoom) and [font-baseline](https://www.npmjs.com/package/font-baseline).

**Note:** Experimental code, use at own risk!

**Note:** Comments, PRs etc. are very welcome.

## Usage

Package uses UMD pattern, to include it `require('typographic-underline-canvas')` or use `window.TypographicUnderline`.

Instantiate with selector or document element:

```javascript
var myUnderlineInstance = new TypographicUnderline('.my-underline-selector')
```

For documentation on available options check out `src/index.js` (comments may be out of date)

## Development

`npm start` for serving example html file on `localhost:3000` and running watch tasks.

`npm format` to format code base.