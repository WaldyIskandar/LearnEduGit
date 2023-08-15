/// <reference types="cypress" />

describe('Login and Logout Website zerobank', () => {
    before (() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html');
        cy.get('#signin_button').click();
    })

    it("Should to login with invalid login", () => {
        cy.fixture('user_zero').then(user_zero => {
            const invalid_username = user_zero.invalid_username
            const invalid_password = user_zero.invalid_password

            cy.invalid_login(invalid_username, invalid_password)
        });
    });

    it("Should display error message", () => {
        cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.');
    });

    it("Should to login with valid data", () => {
        cy.fixture('user_zero').then(user_zero => {
            const username = user_zero.username
            const password = user_zero.password

            cy.login(username, password)
        });
    });

    it("Should logout from website", () => {
        cy.contains('username').click()
        cy.get('#logout_link').click();
        cy.get('.brand').should('contain.text', 'Zero Bank');
    });

});