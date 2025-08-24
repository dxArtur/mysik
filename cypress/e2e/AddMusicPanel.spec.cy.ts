describe('Add Music Panel', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should show the Add button when clicking on Add Music', () => {
    cy.contains('Adicionar Música').click();
    cy.get('form').within(() => {
      cy.contains('Adicionar').should('be.visible');
    });
  });

  it('should hide the Add button when clicking Cancel', () => {
    cy.contains('Adicionar Música').click();

    cy.get('form').within(() => {
      cy.contains('Adicionar').should('be.visible');
      cy.contains('Cancelar').click();
      cy.contains('Adicionar').should('not.exist');
    });

    cy.contains('Adicionar Música').should('be.visible');
  });
});
