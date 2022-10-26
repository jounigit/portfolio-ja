/* eslint-disable no-undef */
describe('Galleria page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.waitForReact()
  })

  it('galleriapage can be opened', () => {
    cy.react('NavLink').nthNode(1).click()
    cy.contains('GALLERIA')
  })

  it('can see albums', () => {
    cy.visit('/galleria')
    cy.waitForReact()
    cy.react('Link').should('exist')
    // cy.react('AlbumListCategory').should('exist')
    // cy.wait(5000)
    // cy.react('AlbumListCategory').getProps('AlbumListCategory').debug()
  })

  // it('galleriapage can be opened', () => {
  //   cy.get('[data-test="navlink-/galleria"]').click()
  //   cy.contains('GALLERIA')
  // })
})
