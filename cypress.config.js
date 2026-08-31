const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  // allowCypressEnv: false,
    e2e: {
    baseUrl: process.env.BASE_URL,

    setupNodeEvents(on, config) {
      config.env.username = process.env.CYPRESS_USERNAME;
      config.env.password = process.env.CYPREESS_PASSWORD;

      return config;
    },
  


    
  },
  
});
