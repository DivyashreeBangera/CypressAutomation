describe('testing api', () => {
    /*it("GET API testing Using Cypress API Plugin", () => {
        cy.request("GET", "https://reqres.in/api/users?page=2").should((response) => {
          expect(response.status).to.eq(200);
        });
    })

    it("POST API testing Using Cypress API Plugin", () => {
        cy.request("POST", "https://reqres.in/api/users", {
          name: "morpheus",
          job: "leader",
        }).should((response) => {
          expect(response.status).to.eq(201);
        });
        
        it("PUT API testing Using Flip Plugin", () => {
            cy.request("PUT", "https://reqres.in/api/users/2", {
              name: "QAAutomationLabs",
              job: "QA Automation Engg",
            }).should((response) => {
              expect(response.status).to.eq(200);
            });
          });

          it("DELETE API testing Using Cypress API Plugin", () => {
            cy.request("DELETE", "https://reqres.in/api/users/2").should((response) => {
              expect(response.status).to.eq(204);
            });
          });


it('Intercept by matching POST method', () => {
  cy.visit('https://reqres.in/');
  cy.intercept('POST', 'api/users', (req) => {
    req.reply({
      status: 200,
      body: {
        "name": "Divya",
        "job": "QA tester",
    }
    })
  }).as('updateuser')
  cy.get("[data-id=post]").click()
  cy.wait('@updateuser')
})
*/

it('Intercept by matching POST method', () => {
  cy.visit('https://reqres.in/')
  //cy.intercept({
   //path: 'api/users' //path parameter which is to be clicked
   cy.intercept('https://reqres.in/api/users', (req) => {
    req.reply({
      status: 200,
      body: {
        "name": "Divya",
        "job": "QA tester",
   }
   
  })

 
  }).as('updateuser') // nick name for intercept object
  cy.get("[data-id=post]").click() //click on particular link
  cy.wait('@updateuser').then(inter => {//wait for interept onject and capture response/inter object
    cy.log(JSON.stringify(inter))
    console.log(JSON.stringify(inter)) //print in the console log
  })

})
})


