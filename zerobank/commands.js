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

// --LOGIN ZERO APK--
Cypress.Commands.add('login', (username, password) => {
    // cy.clearCookies()
    // cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('input[name="user_password"]').clear();
    cy.get('input[name="user_password"]').type(password);

    cy.get('#user_remember_me').check()

    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('input', (amount,description) => {
    cy.get('#sp_payee').select('Apple')
    cy.get('#sp_account').select('Credit Card')
    cy.get('#sp_amount').type(amount)
    cy.get('#sp_date').click()
    cy.get('[class="ui-datepicker-calendar"] > tbody > tr').eq(2).then(tanggal => {
        cy.get(tanggal).find('td').eq(2).click()
    })
    cy.get('#sp_description').type(description)

    cy.get('#pay_saved_payees').click()
})
// --END-- 