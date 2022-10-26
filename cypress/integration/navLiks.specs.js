/* eslint-disable no-undef */
describe('Navigation links', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.waitForReact()
    cy.get('[data-test="menu"] > li').as('menuLinks')
  })

  it('can see all menu links', () => {
    cy.get('@menuLinks').should('have.length', 5)
    // cy.get('[data-test="navLink"] > :first').should('be.disabled')
    cy.get('@menuLinks').should('contain', 'Galleria')
    cy.get('@menuLinks').should('contain', 'Näyttelyt')
    cy.get('@menuLinks').should('contain', 'Artikkelit')
    cy.get('@menuLinks').should('contain', 'CV')
  })

  it('can open galleria page', () => {
    cy.get('@menuLinks').contains('Galleria').click()
    cy.contains('GALLERIA')
  })

  it('can open näyttely page', () => {
    cy.get('@menuLinks').contains('Näyttelyt').click()
    cy.contains('NÄYTTELYT')
  })

  it('can open artikkelit page', () => {
    cy.get('@menuLinks').contains('Artikkelit').click()
    cy.contains('ARTIKKELIT')
  })

  it('can open cv page', () => {
    cy.get('@menuLinks').contains('CV').click()
    cy.contains('CV')
  })
})
