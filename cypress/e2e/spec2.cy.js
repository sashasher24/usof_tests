describe('tests 2', () => {
    it('Should NOT run on CI', () => {
      cy.visit(Cypress.env("USERS_URL"))
      cy.contains(/by reputation/i).should('be.visible')
    })
  })