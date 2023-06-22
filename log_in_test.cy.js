describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://boardgamegeek.com/');
    cy.get('[ggloginbutton=""]').click();
    cy.get('#inputUsername').type('valid_user');
    cy.get('#inputPassword').type('valid_password').type('{enter}');
    cy.get('[role="alert"]').should('be.visible');
  })
})