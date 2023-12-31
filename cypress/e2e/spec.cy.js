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

  it('envia o formuário com sucesso usando um comando customizado', () => {
    //usando comandos costumizados
    cy.fillMandatoryFieldsAndSubmit()
  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    happy.selectItemYoutube();
  })

  it('seleciona um produto (Mentoria) por seu texto', () => {
    happy.selectItemMentoria();
  })

  it('seleciona um produto (Blog) por seu texto', () => {
    happy.selectItemBlog();
  })

  it('seleciona um item do tipo rádio Ajuda', () => {
    happy.selectItemRadioAjuda();
  })

  it('seleciona um item do tipo rádio Elogio', () => {
    happy.selectItemRadioElogio();
  })

  it('seleciona um item do tipo rádio Feedbaack', () => {
    happy.selectItemRadioFeedback();
  })

  it('Marca ambos checkboxes, depois desmarca o último',() => {
    happy.checkCheckboxEmail();
    happy.checkCheckboxPhone();
    cy.wait(2000);
    happy.uncheckCheckboxPhone();
  })

  it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',()=>{
      camposInvalidos.emptyCheckbox();
  })



})

