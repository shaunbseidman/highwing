describe ('First Test', () => {
    it ('Visit the app', () => {
      cy.visit ('http://localhost:3000/');
    });
  });

  describe('Clicks a button', () => {
    it('Clicks on the Premiums button', () => {
    const premiumButtom ='.buttonFilters > :nth-child(1)'
    cy.visit ('http://localhost:3000/');
    // cy.get(premiumButtom)
    })
})