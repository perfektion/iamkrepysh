module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/iamkrepysh/'
    : './',
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/_variables.scss";
          @import "@/assets/_fonts.scss";
        `,
      },
    },
  },
};
