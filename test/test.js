const should = require('should');
const css = require('css');

const loader = require('../index');

const webpackMockContext = {
  cacheable: (() => {})
};

const cssimportantLoader = loader.bind(webpackMockContext);

describe('cssimportant-loader', () => {
  describe('when passed invalid css', () => {
    const cssInput = `#selector1 {
      color: red,
      background: blue;
    };`;

    const cssExpectedOutput = parseAndFormatCSS(`#selector1 {
      color: red !important;
      background: blue !important;
    }

    .selector2 {
      color: green !important;
      font-size: 200px !important;
    }`);

    it('should throw an error', () => {
      should(() => {
        cssimportantLoader(cssInput);
      }).throw(`undefined:4:7: missing '{'`);
    });
  });

  describe('when passed valid css', () => {
    describe('basic selectors', () => {
      const cssInput = `#selector1 {
        color: red;
        background: blue;
      }

      .selector2 {
        color: green;
        font-size: 200px;
      }`;

      const cssExpectedOutput = parseAndFormatCSS(`#selector1 {
        color: red !important;
        background: blue !important;
      }

      .selector2 {
        color: green !important;
        font-size: 200px !important;
      }`);

      it('should modify all the css rules with !important', () => {
        const result = cssimportantLoader(cssInput);

        should.exist(result);
        result.should.equal(cssExpectedOutput);
      });
    });

    describe('media queries', () => {
      const cssInput = `@media(min-width: 900px) {
        #selector1 {
          color: red;
          background: blue;
        }

        .selector2 {
          color: green;
          font-size: 200px;
        }
      }`;

      const cssExpectedOutput = parseAndFormatCSS(`@media(min-width: 900px) {
        #selector1 {
          color: red !important;
          background: blue !important;
        }

        .selector2 {
          color: green !important;
          font-size: 200px !important;
        }
      }`);

      it('should modify all the css rules with !important', () => {
        const result = cssimportantLoader(cssInput);

        should.exist(result);
        result.should.equal(cssExpectedOutput);
      });
    });

    describe('!important', () => {
      const cssInput = `#selector1 {
          color: red !important;
          background: blue !important;
        }

        .selector2 {
          color: green;
          font-size: 200px;
        }`;

      const cssExpectedOutput = parseAndFormatCSS(`#selector1 {
          color: red !important;
          background: blue !important;
        }

        .selector2 {
          color: green !important;
          font-size: 200px !important;
        }`);

      it('should modify all the css rules with !important', () => {
        const result = cssimportantLoader(cssInput);

        should.exist(result);
        result.should.equal(cssExpectedOutput);
      });
    });
  });
});

function parseAndFormatCSS(input) {
  const ast = css.parse(input);

  return css.stringify(ast);
}
