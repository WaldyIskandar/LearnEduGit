describe('Create new user', () => {
    it('Successfully create new user', () => {
        let user = {
            "name": "waldy",
            "job": "freelance"
        }
    
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).to.equal(user.name)
            expect(response.body.job).to.equal(user.job)
        })
    });
});