describe('Cypress Assertions', () => {
   
    it('Should - Checkbox Assertion', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/checkbox-demo')
        /* select checkbox and verify if it is checked */
        cy.get('#isAgeSelected').check().should('be.checked')
        cy.get('.cb-element.mr-10').check().should('be.checked')
        /* unselect checkbox and verify if it is un-checked */
        cy.get('#isAgeSelected').uncheck().should('not.be.checked')
        cy.get('.cb-element.mr-10').uncheck().should('not.be.checked')
    })

})
