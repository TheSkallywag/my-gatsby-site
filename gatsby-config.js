require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
      title: `new`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      
    ],
}