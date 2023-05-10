const { defineConfig } = require("cypress");
//const gmailTester = require("gmail-tester");
//const path = require("path");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      //on("task", {
        //"gmail:get-messages": async (args) => {
          //const messages = await gmailTester.get_messages(
          //  path.resolve(__dirname, "credentials.json"),
           // path.resolve(__dirname, "token.json"),
           // args.options
          //);
          //return messages;
   // },
  },}})
//}},
//});

