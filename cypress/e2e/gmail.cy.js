describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://accounts.google.com/InteractiveLogin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=Af_xneHICc6qUyXk7Lx0uBtulMDHNcjmPw7M1ghNuuGC2lY5rIO-iQkKkq_fjp_Hx4sY0NZeD-EhdA&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
    cy.get('input[type=email]').type('testdivya6@gmail.com')
    cy.contains('Next').click()
    cy.get('input[type=password]').type('Test@123')
    cy.contains('Next').click()
    
        //cy.get('input[name=password]').type('admin123')

        
  })
})