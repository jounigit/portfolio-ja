/* eslint-disable no-undef */
describe('Exhibition page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('galleriapage can be opened', () => {
    cy.get('[data-test="navlink-/exhibitions"]').click()
    cy.contains('NÄYTTELYT')
  })

  // it('can see all menu links', () => {
  //   cy.get('@menuLinks').should('have.length', 5)
  //   // cy.get('[data-test="navLink"] > :first').should('be.disabled')
  //   cy.get('@menuLinks').should('contain', 'Galleria')
  //   cy.get('@menuLinks').should('contain', 'Näyttelyt')
  //   cy.get('@menuLinks').should('contain', 'Artikkelit')
  //   cy.get('@menuLinks').should('contain', 'CV')
  // })
})
