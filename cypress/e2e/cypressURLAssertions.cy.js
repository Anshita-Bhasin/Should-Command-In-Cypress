describe('Cypress Assertions', () => {

    it('Should - URL Assertion', () => {

        /* Verify the url of web application */
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.url().should('eq', "https://ecommerce-playground.lambdatest.io/")
        cy.url().should('include', "https://ecommerce-playground")

    })
})