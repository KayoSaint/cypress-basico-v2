class happy {

   preecheTudo(){

        cy.get('input[id="firstName"]').type(Cypress.env('first_name'))
    
        cy.get('input[id="lastName"]')
        .type('Ferreira')
    
        cy.get('input[id="email"]')
        .type('kayo@gmail.com')
    
        cy.get('input[id="phone"]')
        .type('88993794477')
    
        cy.get('textarea[id="open-text-area"]')
        .type('Me ajude a saber muito!')

        //teste usando o contains ao invés do get para realizar ações.
        cy.contains('button[type="submit"][class="button"]','Enviar').click()
        
        cy.get('span[class="success"]')
        .should('be.visible')

   }
    
}

export default new happy
