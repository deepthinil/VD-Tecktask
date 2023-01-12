# VD-Tecktask


I have used Cypress / JavaScript / VS Code  to implement the tests for the given project. I have added some test specific attributes to the source code in order to access the elements within the tests (called data-cy). 


**How to run the tests**
 
1. Navigates to the root folder of the project
2. Run the following commands:

   npm install
   npm run dev
   npx cypress open

3.Select the browser you want to run (Chrome)
4. Then select the contosoTests, it will trigger the tests

5. Alternatively you can use the following command to run the test without GUI

      node_modules/.bin/cypress run --spec "cypress/e2e/contosoTests.spec.js"


6. Command to run the test once cypress/browser is set up:

      npm run cy:run --spec "cypress/e2e/contosoTests.spec.js"

