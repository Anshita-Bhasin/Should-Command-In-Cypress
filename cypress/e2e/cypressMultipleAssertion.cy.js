describe('Cypress Assertions', () => {

    it('Should - Multiple Assertion', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.get('.figure.img-top').should('have.length', 8)
            .last()
            .should('include.text', "MP3 Players")
        cy.get('input[name="search"]').first().should('have.attr', 'aria-label', "Search For Products").type('iphone').should('have.value', 'iphone')

    })
})