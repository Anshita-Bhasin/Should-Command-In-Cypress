describe('Cypress Assertions', () => {

    it('Should - Multiple Assertion', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.get('.figure.img-top').should('have.length', 8)
            .last()
            .should('include.text', "MP3 Players").should('have.css', 'font-family')
        cy.get('input[name="search"]').first().should('have.attr', 'aria-label', "Search For Products").type('iphone').should('have.value', 'iphone')

    })
    it('Should - Multiple Assertion for Dropdown', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
        cy.get('#select-demo').select('Wednesday')
        cy.get('#select-demo option:selected').should('be.selected').and('have.value', 'Wednesday')
    })
})