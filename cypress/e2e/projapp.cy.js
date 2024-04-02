describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/')
    // image
    cy.get('img').should('exist')
    cy.get('img').should('have.attr', 'alt').and('include','Vue logo')
    cy.get('img').should('have.attr', 'src').and('not.be.empty')
    // message
    cy.get('h1').should('exist')
    cy.get('h1').should('have.text', 'Welcome to Your Vue.js App')
    //paragraph
    cy.get('p').should('exist')
    cy.get('p').contains('For a guide and recipes on how to configure / customize this project, check out the vue-cli documentation')
    cy.get('a[href="https://cli.vuejs.org"][target="_blank"][rel="noopener"]').contains('vue-cli documentation');
    // button1
    cy.get('a[href="https://example.org"][target="_blank"][rel="noopener"]').should('exist');
    cy.get('a[href="https://example.org"][target="_blank"][rel="noopener"] button').should('exist');
    cy.get('a[href="https://example.org"][target="_blank"][rel="noopener"] button').contains('Go to Vue.js');
    // button2
    cy.get('a[href="https://example.com"][target="_blank"][rel="noopener"]').should('exist');
    cy.get('a[href="https://example.com"][target="_blank"][rel="noopener"] button').should('exist');
    cy.get('a[href="https://example.com"][target="_blank"][rel="noopener"] button').contains('Others');
  })
})