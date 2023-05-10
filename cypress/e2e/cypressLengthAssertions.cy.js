describe('Cypress Assertions', () => {

    it('Should - Length Assertion', () => {

        /* Verify the number of categories on the page */
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.get('.navbar-nav.horizontal>li').should('have.length', 6)

        /* Verify the number of top products on the page */
        cy.get('.swiper-wrapper').eq(1).find('>div').should('have.text', 10)

    })
})