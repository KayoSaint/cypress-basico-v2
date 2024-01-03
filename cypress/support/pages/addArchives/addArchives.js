class addArchive {

    uploadExample() {
        cy.get('input[type="file"]').selectFile('./cypress/fixtures/example.json')
        .should(($input) => {
            expect($input[0].files[0].name).to.be.equal('example.json')
            })
    }
    dragAndDrop() {
        cy.get('input[type="file"]').selectFile('./cypress/fixtures/example.json', { action: 'drag-drop'})
        .should(($input) => {
            expect($input[0].files[0].name).to.be.equal('example.json')
            })
    }
    aliasFile() {
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]').selectFile('@sampleFile')
        .should(($input) => {
            expect($input[0].files[0].name).to.be.equal('example.json')
            })
        
    }


}
export default new addArchive();