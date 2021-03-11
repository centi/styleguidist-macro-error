const path = require('path');

module.exports = {
  title: 'Components',
  pagePerSection: true,
  webpackConfig: require('./webpack.config.js'),
  styleguideComponents: {
    Wrapper: path.join(__dirname, './Wrapper'),
  },
  propsParser: require('react-docgen-typescript').parse,
 
  sections: [
    {
      name: 'Read me!',
      content: 'README.md',
    },
    {
      name: 'Components*',
      sections: [
        {
          name: 'Button',
          content: 'src/components/Button/Button.md',
        },
      ],
      sectionDepth: 2,
    },
  
  ],
};
