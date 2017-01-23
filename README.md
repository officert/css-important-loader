# cssimportant-loader
[Webpack](https://webpack.github.io/docs/) CSS Loader to add !important to all styles

[Cleanslate CSS](http://cleanslatecss.com/usage/) is an aggressive CSS reset. To use it you need to add `!important` to all of your styles.

This [Webpack](https://webpack.github.io/docs/) loader will add `!important` to all your styles so you can easily use Cleanslate, without having to manually add `important` everywhere.

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
