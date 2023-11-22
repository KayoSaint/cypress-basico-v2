class camposInvalidos{
    
semNome(){
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
        
        cy.get('span[class="error"]')
        .should('be.visible')
}
emailInvalido(){

        cy.get('input[id="firstName"]')
        .type('Kayo')

        cy.get('input[id="lastName"]')
        .type('Ferreira')
    
        cy.get('input[id="email"]')
        .type('kayogmaicom')
    
        cy.get('input[id="phone"]')
        .type('88993794477')
    
        cy.get('textarea[id="open-text-area"]')
        .type('Me ajude a saber muito!')
    
        cy.get('button[type="submit"]')
        .click()
        
        cy.get('span[class="error"]')
        .should('be.visible')
}

telefoneVazio(){

        cy.get('input[id="firstName"]')
        .type('Kayo')

        cy.get('input[id="lastName"]')
        .type('Ferreira')
    
        cy.get('input[id="email"]')
        .type('kayogmaicom')
    
        cy.get('textarea[id="open-text-area"]')
        .type('Me ajude a saber muito!')
    
        cy.get('button[type="submit"]')
        .click()
        
        cy.get('span[class="error"]')
        .should('be.visible')
}

limpaCampos(){

        cy.get('input[id="firstName"]')
        .type('Kayo').should('have.value','Kayo')
        .clear().should('have.value','')
    
        cy.get('input[id="lastName"]')
        .type('Ferreira').should('have.value','Ferreira')
        .clear().should('have.value','')
    
        cy.get('input[id="email"]')
        .type('kayo@gmail.com').should('have.value','kayo@gmail.com')
        .clear().should('have.value','')
    
        cy.get('input[id="phone"]')
        .type('88993794477').should('have.value','88993794477')
        .clear().should('have.value','')
    
        cy.get('textarea[id="open-text-area"]')
        .type('Me ajude a saber muito!')
    
        cy.get('button[type="submit"]')
        .click()
        
        cy.get('span[class="error"]')
        .should('be.visible')
}

}



export default new camposInvalidos;