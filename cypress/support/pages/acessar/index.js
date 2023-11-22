class login{
    acessarLogin(){
        beforeEach (() =>{
            cy.viewport(1280, 720)
            cy.visit('./src/index.html')
            cy.intercept('GET', 'http://localhost:42015/__cypress/iframes/cypress%2Fe2e%2Fspec.cy.js?browserFamily=chromium',{statusCode:200})
            .as('http://localhost:42015/__cypress/iframes/cypress%2Fe2e%2Fspec.cy.js?browserFamily=chromiuma');

            cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
            
          })
    }
  
}
export default new login();