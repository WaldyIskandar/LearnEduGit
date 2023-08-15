/// <reference types="cypress" />

describe('Zero Bank pay bills', () => {
    it('visit the website', () => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });

    it('should try to login', () => {
        cy.fixture('user_zero').then(user_zero => {
            const username = user_zero.username
            const password = user_zero.password

            cy.login(username, password)
        })
    });

    it('Move page online banking', () => {
        cy.get('a').contains('Pay Bills').click()
    });

    it('Input your data', () => {
        cy.fixture('user_zero').then(user_zero => {
            const amount = user_zero.amount
            const description = user_zero.description

            cy.input(amount,description)
        })
    });

});