describe('Cypress Assertions', () => {

    it.only('Should - Attribute Assertion for Textbox', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.get('span:contains("Home")').parents('a').should('have.attr', 'href','https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
        })

})