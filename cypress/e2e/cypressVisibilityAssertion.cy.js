describe('Cypress Assertions', () => {

    it.only('Should - Visibility Assertion', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.get('span:contains("Home")').should('be.visible')
        cy.get('.modal-dialog').should('not.be.visible');
      
    })

})