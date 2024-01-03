class camposInvalidos {

        semNome() {
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
        emailInvalido() {

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

        telefoneVazio() {

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

        limpaCampos() {

                cy.get('input[id="firstName"]')
                        .type('Kayo').should('have.value', 'Kayo')
                        .clear().should('have.value', '')

                cy.get('input[id="lastName"]')
                        .type('Ferreira').should('have.value', 'Ferreira')
                        .clear().should('have.value', '')

                cy.get('input[id="email"]')
                        .type('kayo@gmail.com').should('have.value', 'kayo@gmail.com')
                        .clear().should('have.value', '')

                cy.get('input[id="phone"]')
                        .type('88993794477').should('have.value', '88993794477')
                        .clear().should('have.value', '')

                cy.get('textarea[id="open-text-area"]')
                        .type('Me ajude a saber muito!')

                cy.get('button[type="submit"]')
                        .click()

                cy.get('span[class="error"]')
                        .should('be.visible')
        }

        emptyCheckbox() {
                cy.get('input[id="firstName"]').type(Cypress.env("first_name"));

                cy.get('input[id="lastName"]').type("Ferreira");

                cy.get('input[id="email"]').type("kayo@gmail.com");

                cy.get('#email-checkbox').check()

                cy.get('input[id="phone-checkbox"]').check()

                cy.get('textarea[id="open-text-area"]').type("Me ajude a saber muito!");

                cy.get('button[type="submit"]').click()

                cy.get('span[class="error"]').should('be.visible')

                //teste usando o contains ao invés do get para realizar ações.
                //cy.contains('button[type="submit"][class="button"]', "Enviar").click();
        }

}



export default new camposInvalidos();