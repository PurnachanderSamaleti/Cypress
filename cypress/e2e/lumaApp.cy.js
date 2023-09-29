describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#ui-id-3').click()
    cy.get('#ui-id-7 > :nth-child(2)').click()
  })
})