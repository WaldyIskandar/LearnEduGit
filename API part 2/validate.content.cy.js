describe('Validate API', () => {
    it('Success validate header content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')

        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
        
        cy.get('@pokemon').should((response) => {
            // expect(response.body).to.have.property('base_experience')
            expect(response.body.abilities[0].ability.name).to.eq('limber')
        });
    });

    
});