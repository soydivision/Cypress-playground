describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://boardgamegeek.com/');
    cy.title().should('eq', 'BoardGameGeek | Gaming Unplugged Since 2000');
  })
})