describe('template spec', () => {
  it('Visit to the SuperAdmin Login page', () => {
    //opens Login page of SuperAdmin
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.get('input[name=username]').type('Admin')
        cy.get('input[name=password]').type('admin123')
        cy.get('[type=submit]').click()
        cy.wait(5000)
  })
})