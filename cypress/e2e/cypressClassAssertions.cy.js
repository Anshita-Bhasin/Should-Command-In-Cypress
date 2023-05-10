describe('Cypress Assertions', () => {

    it('Should - Class Assertion', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
        cy.get('#input-email').type('lambdatest.Cypress@disposable.com').should('have.class', 'form-control')
        cy.get('#input-password').type('Cypress123!!')
        cy.get('[value="Login"]').should('have.class', 'btn btn-primary')
    })

})