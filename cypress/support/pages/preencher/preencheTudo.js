class happy {
  preecheTudo() {
    cy.get('input[id="firstName"]').type(Cypress.env("first_name"));

    cy.get('input[id="lastName"]').type("Ferreira");

    cy.get('input[id="email"]').type("kayo@gmail.com");

    cy.get('input[id="phone"]').type("88993794477");

    cy.get('textarea[id="open-text-area"]').type("Me ajude a saber muito!");

    //teste usando o contains ao invés do get para realizar ações.
    cy.contains('button[type="submit"][class="button"]', "Enviar").click();

    cy.get('span[class="success"]').should("be.visible");
  }
  selectItemYoutube() {
    cy.get('select[id="product"]').select("YouTube").should("be.visible", "YouTube");
  }
  selectItemMentoria() {
    cy.get('select[id="product"]')
      .select("Mentoria")
      .should("have.value", "mentoria");
  }
  selectItemBlog() {
    cy.get('select[id="product"]').select(1).should("have.value", "blog");
  }

  selectItemRadioAjuda() {
    cy.get('input[value="ajuda"]').check().should("be.checked");
  }
  selectItemRadioElogio() {
    cy.get('input[value="elogio"]').check().should("be.checked");
  }
  selectItemRadioFeedback() {
    cy.get('input[value="feedback"]').check().should("be.checked");
  }

  checkCheckboxEmail() {
    cy.get('input[id="email-checkbox"]').check().should("be.checked")
  }

  checkCheckboxPhone() {
    cy.get('input[id="phone-checkbox"]').check().should("be.checked")
  }

  uncheckCheckboxEmail() {
    cy.get('input[id="email-checkbox"]').uncheck().should("be.checked")
  }

  uncheckCheckboxPhone() {
    cy.get('input[id="phone-checkbox"]').uncheck().should("not.checked")
  }
}

export default new happy();
