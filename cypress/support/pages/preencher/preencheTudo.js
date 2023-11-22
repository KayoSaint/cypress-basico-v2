class happy {

   preecheTudo(){

        cy.get('input[id="firstName"]')
        .type('Kayo')
    
        cy.get('input[id="lastName"]')
        .type('Ferreira')
    
        cy.get('input[id="email"]')
        .type('kayo@gmail.com')
    
        cy.get('input[id="phone"]')
        .type('88993794477')
    
        cy.get('textarea[id="open-text-area"]')
        .type('Me ajude a saber muito!')
    
        cy.get('button[type="submit"]')
        .click()
        
        cy.get('span[class="success"]')
        .should('be.visible')

   }
    
}

export default new happy
