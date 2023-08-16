/// <reference types="cypress" />

describe('Navbar testing', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html');
    });

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click();
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.get('#feedback').click();
        cy.url().should('include', 'feedback.html');
        cy.get('#feedback-title').should('be.visible');
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click();
        cy.url().should('include', 'index.html');
        cy.contains('Home').should('be.visible');
    });

    it('Should display login content', () => {
        cy.get('#signin_button').click();
        cy.url().should('include', 'login.html');
        cy.get('h3').should('be.visible');
    });
});