// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
) => {

    cy.request('GET', `https://${email}:${password}@${Cypress.env('apiUrl')}/basic_auth`, )
    .then((response) => {
        expect(response.status).to.eq(200)
        cy.get(response.body).should('contain.text', 'Congratulations! You must have the proper credentials')
    })
    // cy.request('POST', `https://${email}:${password}@${Cypress.env('apiUrl')}/basic_auth`, {
    //     username: email,
    //     password,
    // }).then((response) => {
    //     cy.setCookie('sessionId', response.body.sessionId)
    //     cy.setCookie('userId', response.body.userId)
    //     cy.setCookie('userName', response.body.userName)
    //     cy.visit('https://the-internet.herokuapp.com/basic_auth');
    // })
    
})