// describe('Cypress Assertions',()=>{


//     it('Asserting length using should',()=>{


// //cy.get('.todo-list li').should('have.length', 2)

// // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')


// //  cy.get('.todo-list li')
// //       .should('have.length', 3)
// //             .last()
// //             .should('have.text', newItem)



//         // cy.get('.todo-list li')
//         //     .should('have.length', 1)
//         //     .first()
//         //     .should('have.text', 'Walk the dog')



//         // cy.contains('Pay electric bill').should('not.exist')


//         // cy.get('.todo-list li')
//         //     .should('have.length', 1)
//         //     .first()
//         //     .should('have.text', 'Pay electric bill')

//         // cy.contains('Walk the dog').should('not.exist')




//         cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')

//             .type('slow.typing@email.com', { delay: 100 })
//             .should('have.value', 'slow.typing@email.com')

//         cy.get('.action-focus').focus()
//             .should('have.class', 'focus')
//             .prev().should('have.attr', 'style', 'color: orange;')
//     })




//     cy.get('.action-blur').type('About to blur').blur()
//         .should('have.class', 'error')
//         .prev().should('have.attr', 'style', 'color: red;')

//     cy.get('.action-form').submit()
//         .next().should('contain', 'Your form has been submitted!')
//     cy.get('.action-multiple-checkboxes [type="checkbox"]')
//         .check(['checkbox1', 'checkbox2']).should('be.checked')

//     cy.get('.action-check [type="checkbox"]')
//         .not('[disabled]')
//         .uncheck().should('not.be.checked')


//     cy.get('.action-select')
//         .should('have.value', '--Select a fruit--')


//     cy.get('.action-select-multiple')
//         .select(['apples', 'oranges', 'bananas'])
//         // when getting multiple values, invoke "val" method first
//         .invoke('val')
//         .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])


//     cy.get('.action-select').select('fr-bananas')
//         // can attach an assertion right away to the element
//         .should('have.value', 'fr-bananas')




//     cy.get('#scroll-horizontal button')
//         .should('not.be.visible')

//     // scroll the button into view, as if the user had scrolled
//     cy.get('#scroll-horizontal button').scrollIntoView()
//         .should('be.visible')



//     cy.get('@firstBtn')
//         .should('have.class', 'btn-success')
//         .and('contain', 'Changed')


//     it('.invoke() - invoke a function on the current subject', () => {
//         // our div is hidden in our script.js
//         // $('.connectors-div').hide()
//         cy.get('.connectors-div').should('be.hidden')


//         cy.get('.connectors-div').should('be.visible')

//         cy.getCookies().should('be.empty')

//         it('cy.clearCookie() - clear a browser cookie', () => {
//             // https://on.cypress.io/clearcookie
//             cy.getCookie('token').should('be.null')


//             cy.fixture('profile').should((profile) => {
//                 expect(profile.name).to.eq('Jane')


//                 it('cy.hash() - get the current URL hash', () => {
//                     // https://on.cypress.io/hash
//                     cy.hash().should('be.empty')
//                 })

//                 cy.location().should((location) => {
//                     expect(location.hash).to.be.empty
//                     expect(location.href).to.eq('https://example.cypress.io/commands/location')

//                     cy.url().should('eq', 'https://example.cypress.io/commands/location')


//                     it('cy.focused() - get the DOM element that has focus', () => {
//                         // https://on.cypress.io/focused
//                         cy.get('.misc-form').find('#name').click()
//                         cy.focused().should('have.id', 'name')


//                         cy.go(1)
//                         cy.location('pathname').should('include', 'navigation')

//                         it('cy.request() with query parameters', () => {
//                             // will execute request
//                             // https://jsonplaceholder.cypress.io/comments?postId=1&id=3
//                             cy.request({
//                                 url: 'https://jsonplaceholder.cypress.io/comments',
//                                 qs: {
//                                     postId: 1,
//                                     id: 3,
//                                 },
//                             })
//                                 .its('body')
//                                 .should('be.an', 'array')
//                                 .and('have.length', 1)
//                                 .its('0') // yields first element of the array
//                                 .should('contain', {
//                                     postId: 1,
//                                     id: 3,
//                                 })
//                         })


//                         cy.get('[data-test-id="test-example"]')
//                             .invoke('attr', 'data-test-id')
//                             .should('equal', 'test-example')