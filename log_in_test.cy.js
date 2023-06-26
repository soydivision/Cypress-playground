describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://boardgamegeek.com/');
    cy.get('[ggloginbutton=""]').click();
    cy.get('#inputUsername').type('fake_user_name');
    cy.get('#inputPassword').type('fake_password').type('{enter}');
    cy.get('[role="alert"]').should('be.visible');
  })
})