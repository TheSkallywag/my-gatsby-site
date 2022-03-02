'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    GATSBY_API_URL,
    GATSBY_API_KEY,
    HTTPS_ENDPOINT,
  } = process.env;
  
  assert(HTTPS_ENDPOINT || HTTPS_ENDPOINT, "Create an '.env' file and fill in the details.");
  
  module.exports = {
    httpsEndpoint: HTTPS_ENDPOINT,
    gatsbyApiUrl: GATSBY_API_URL,
    gatsbyApiKey: GATSBY_API_KEY,
  };