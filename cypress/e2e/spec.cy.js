import login from '../support/pages/acessar/index';
import happy from '../support/pages/preencher/preencheTudo'
import camposInvalidos from '../support/pages/preencher/camposInvalidos';
import addArchive from '../support/pages/addArchives/addArchives';
import otherTabs from '../support/pages/otherTabs/otherTabs';

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

  it('Seleciona um arquivo da pasta fixtures',()=>{
    addArchive.uploadExample();
  })

  it('Seleciona um arquivo simulando um drag-and-drop',()=>{
    addArchive.dragAndDrop();
  })

  it('Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias',()=>{
    addArchive.aliasFile();
  })

  it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique',()=>{
    otherTabs.targetBlank();
  })

  it('Acessa a página da política de privacidade removendo o target e então clicando no link',()=>{
    otherTabs.invoke();
  })




})

