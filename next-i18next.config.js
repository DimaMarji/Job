// next-i18next.config.js
const path = require('path');

module.exports = {
    i18n: {
      locales: ['en', 'ar'],
      defaultLocale: 'en',
      localeDetection: false
    },
    react: { useSuspense: false } ,
    localePath: path.resolve('./src/locales')

  }
  