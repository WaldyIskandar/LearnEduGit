describe('basic auth', function() {
    it('success login auth', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
        
    });
    it('success login with header', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        });
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });

    it.only('Successfully login using cypress API simple custom command', () => {
        cy.loginViaAPI();
    })
});