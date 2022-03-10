/* eslint-disable no-undef */
describe('Articles page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="menu"] > li').as('menuLinks')
  })

  it('galleriapage can be opened', () => {
    cy.get('[data-test="navlink-/articles"]').click()
    cy.contains('ARTIKKELIT')
  })
})
