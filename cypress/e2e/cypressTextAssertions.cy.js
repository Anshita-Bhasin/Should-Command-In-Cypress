describe('Cypress Assertions', () => {

    it('Should - Text Assertion', () => {

        /* Verify the text of category on the page */
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.get('.m-md-0.d-flex.align-items-center.mb-3').should('have.text', "Upto 30% Off on Popular Smartphones + Exchange Offers")
        /* Verify the text of specific products at specific location on the page */
        cy.get('.swiper-slide.swiper-slide-active').eq(2).find('>div>div>h4>a').first().should('have.text', 'HTC Touch HD')
    })
})