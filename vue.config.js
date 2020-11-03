module.exports = {
  publicPath: '/iamkrepysh/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/_variables.scss";
          @import "@/assets/_fonts.scss";
        `,
      },
    },
  },
};
