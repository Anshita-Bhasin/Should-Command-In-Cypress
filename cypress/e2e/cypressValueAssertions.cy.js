describe('Cypress Assertions', () => {

    it.only('Should - Value Assertion for Textbox', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.get('input[name="search"]').first().type('iphone')
        cy.get('input[name="search"]').first().should('have.value', 'iphone')

    })

    it('Should - Value Assertion for Dropdown', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
        cy.get('#select-demo').select('Wednesday')
        cy.get('#select-demo option:selected').should('have.value', 'Wednesday')
    })
})