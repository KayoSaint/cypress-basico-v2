// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('input[id="firstName"]').type('Kayo')
    cy.get('input[id="lastName"]').type('Ferreira')
    cy.get('input[id="email"]').type('kayo@gmail.com')
    cy.get('input[id="phone"]').type('88993794477')
    cy.get('textarea[id="open-text-area"]').type('Me ajude a saber muito!')
    cy.get('button[type="submit"]').click()
    cy.get('span[class="success"]').should('be.visible')
})