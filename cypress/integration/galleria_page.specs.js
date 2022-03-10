/* eslint-disable no-undef */
describe('Galleria page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="menu"] > li').as('menuLinks')
  })

  it('galleriapage can be opened', () => {
    cy.get('[data-test="navlink-/galleria"]').click()
    cy.contains('GALLERIA')
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
