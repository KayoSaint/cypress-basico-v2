class otherTabs {
    
    targetBlank(){
        cy.get('#privacy a').should('have.attr','target','_blank')
    }
    invoke(){
        cy.get('#privacy a').invoke('removeAttr','target').click()
        cy.contains('Talking About Testing');
    }
}

export default new otherTabs();