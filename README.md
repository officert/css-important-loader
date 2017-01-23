# cssimportant-loader

[![npm version](https://badge.fury.io/js/cssimportant-loader.svg)](https://badge.fury.io/js/cssimportant-loader)

[Webpack](https://webpack.github.io/docs/) CSS Loader to add !important to all styles.

While using `!important` is typically frowned upon there are times when it can be useful. When building widgets that will be embedded directly into third party websites (no iframe) the CSS rules in the host site may be unpredictable and cause CSS bleeding. [Cleanslate CSS](http://cleanslatecss.com/) is an aggressive CSS reset that can be used for this exact situation, however to use it you need to add `!important` to all of your styles to properly override it's resets with your own styles.

This [Webpack](https://webpack.github.io/docs/) loader will add `!important` to all your styles so you can easily use Cleanslate, without having to manually add `important` everywhere.

### Install

```sh
npm install cssimportant-loader --save-dev
```

### Usage

*webpack.config.js*

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', 'cssimportant-loader' ]
      }
    ]
  }
}
```

*in your application*

```js
import css from 'file.css';
```
### Example

given this CSS:

```css
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #EFEFEF;
}
```

will return this CSS:

```css
.modal-bg {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  height: 100% !important;
  width: 100% !important;
  background: #EFEFEF !important;
}
```

### Running Tests

```sh
npm run test
```
