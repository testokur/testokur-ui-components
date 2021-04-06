module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: [
    '@storybook/addon-a11y',
       {
           name: '@storybook/addon-postcss',
           options: {
             postcssLoaderOptions: {
               implementation: require('postcss'),
             },
           },
         },
  ],
};
