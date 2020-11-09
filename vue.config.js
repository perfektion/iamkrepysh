module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/iamkrepysh/'
    : './',
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_fonts.scss";
          @import "@/assets/scss/_animations.scss";
        `,
      },
    },
  },
};
