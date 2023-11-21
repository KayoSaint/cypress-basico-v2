describe('template spec', () => {
  
beforeEach (() =>{
  cy.viewport(1280, 720)
  cy.visit('./src/index.html')
  cy.intercept('GET', 'http://localhost:42015/__cypress/iframes/cypress%2Fe2e%2Fspec.cy.js?browserFamily=chromium')
  .as('http://localhost:42015/__cypress/iframes/cypress%2Fe2e%2Fspec.cy.js?browserFamily=chromiuma');
})

  it('Central de Atendimento ao Cliente - TAT', () => {
    //Verifica se o titulo da pagina acessada é a que queremos acessar
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    

  })

  // cy.wait('http://localhost:42015/__cypress/iframes/cypress%2Fe2e%2Fspec.cy.js?browserFamily=chromium').then(()=>{
  //   if (interception.response.statusCode === 200) {
  //     // Faz o console.log
  //     console.log('A rota foi carregada com sucesso (status 200, OK)');
  //   } else {
  //     // Pode adicionar lógica aqui para lidar com outros status, se necessário
  //     console.log(`A rota foi carregada, mas o status foi: ${interception.response.statusCode}`);
  //   }
  // });


  it('Preenche os campos obrigatórios e envia o formulário', () => {
  
    cy.get('input[id="firstName"]')
    .should('be.visible')
    .click()
    .type('Kayo')

    cy.get('input[id="lastName"]')
    .should('be.visible')
    .click()
    .type('Ferreira')

    cy.get('input[id="email"]')
    .should('be.visible')
    .click()
    .type('kayo@gmail.com')

    cy.get('input[id="phone"]')
    .should('be.visible')
    .click()
    .type('88993794477')

    cy.get('textarea[id="open-text-area"]')
    .should('be.visible')
    .click()
    .type('Me ajude a saber muito!')

    cy.get('button[type="submit"]')
    .should('be.visible')
    .click()
    
    cy.get('span[class="success"]')
    .should('be.visible')

  })
})