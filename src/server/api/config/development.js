export default {
  mongo: {
    uri: 'mongodb://localhost/michalsBlogDev'
  },

  seedDB: true,

  port: process.env.PORT || 8000,

  tokenSecret: 'yeah really secret secret!!'
}
