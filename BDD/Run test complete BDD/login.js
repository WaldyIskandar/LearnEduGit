import LoginPage from './login.page';
const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page', () => {
    LoginPage.visit();
})

When('I submit login', () => {
    LoginPage.fillUsername('username');
    LoginPage.fillPassword('password');
    LoginPage.signIn();
})

Then('I should see homepage', () => {
    cy.get('#account_summary_tab > a').should('be.visible');
    
})