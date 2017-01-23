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
