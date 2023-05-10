describe('Cypress Assertions', () => {

    it.only('Should - Empty Assertion', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.hash().should('be.empty')

    })

})