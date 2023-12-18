import login from '../support/pages/acessar/index';
import happy from '../support/pages/preencher/preencheTudo'
import camposInvalidos from '../support/pages/preencher/camposInvalidos';


describe('template spec', () => {
  
  //visita a página
  login.acessarLogin();

  it('Preenche os campos obrigatórios e envia o formulário', () => {
    happy.preecheTudo();
  })

  it(' Não Preenche o campo de nome e envia o formulário', () => {
    camposInvalidos.semNome();
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida!', () => {
    camposInvalidos.emailInvalido();
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    camposInvalidos.telefoneVazio();
  })
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    camposInvalidos.limpaCampos();
  })

  it('envia o formuário com sucesso usando um comando customizado', ()=>{
    //usando comandos costumizados
    cy.fillMandatoryFieldsAndSubmit()
  })
})

