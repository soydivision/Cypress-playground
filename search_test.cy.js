describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://boardgamegeek.com/');
    cy.get('[type="search"]').type('Dune').type('{enter}');
    cy.get('#collection').should('be.visible');
  })
})