describe ('First Test', () => {
    it ('Visit the app', () => {
      cy.visit ('/');
    });
  });

  describe('Clicks a button', () => {
    it('Clicks on the Premiums button', () => {
    const premiumButtom ='.buttonFilters > :nth-child(1)';
    const text = 'Broker Premium';
    cy.visit ('/');
    cy.wait(500);
    cy.get(premiumButtom).click();
    cy.get(':nth-child(1) > .pieData > .categoryTitles').contains(text);
    cy.get('.jss3').should('have.css', 'background-color', 'rgb(0, 224, 194)');
    })
})


describe('Clicks multiple buttons', () => {
  it('Clicks on the Premiums and Industries buttons', () => {
  const premiumButtom ='.buttonFilters > :nth-child(1)';
  const industriesButton = '.buttonFilters > :nth-child(3)';
  const text = 'Broker Premium';
  cy.visit ('/');
  cy.wait(500);
  cy.get(premiumButtom).click();
  cy.get(':nth-child(1) > .pieData > .categoryTitles').contains(text);
  cy.get('.jss3').should('have.css', 'background-color', 'rgb(0, 224, 194)');
  cy.get(industriesButton).click();
  cy.get('.buttonFilters > :nth-child(3)').should('have.css', 'background-color', 'rgb(0, 224, 194)');
  })
})

describe('Clicks mulitple buttons more than once', () => {
  it('Clicks on the Premiums and Markets button, then clicks on the Products button once and then again to toggle', () => {
  const premiumButtom ='.buttonFilters > :nth-child(1)';
  const marketsButtonButton = '.buttonFilters > :nth-child(2)';
  const productsButton = '.buttonFilters > :nth-child(4)'
  cy.visit ('/');
  cy.wait(500);
  cy.get(premiumButtom).click();
  cy.get('.jss3').should('have.css', 'background-color', 'rgb(0, 224, 194)');
  cy.get(marketsButtonButton).click();
  cy.get('.buttonFilters > :nth-child(2)').should('have.css', 'background-color', 'rgb(0, 224, 194)');
  cy.get(productsButton).click();
  cy.get('.buttonFilters > :nth-child(4)').should('have.css', 'background-color', 'rgb(0, 224, 194)');
  cy.get(productsButton).click();
  cy.get('.buttonFilters > :nth-child(4)').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
  })
})