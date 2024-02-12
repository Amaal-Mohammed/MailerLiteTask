const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://dashboard.mailerlite.com',
    viewportHeight: 2000,
    viewportWidth: 2500
  },

  env: {
    group_url: '/groups',
    email: "amaal.adel2020@gmail.com",
    password: ""
  },
});
