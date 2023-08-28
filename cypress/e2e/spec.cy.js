describe('tests 1', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("URL")}`)
  })
  it('Should run on CI', {tags: ['@ci', '@smoke']}, () => {
    cy.contains(/Sort by: /i).should('be.visible')    
  })

  it('should NOT run on CI', () => {
    cy.get('nav').find('li').should('have.length', 3)
  })
})