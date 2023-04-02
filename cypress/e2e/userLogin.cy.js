describe('Visit CURA Healthcare Service and make an appointment', () => {
        
  it(' Should be able to make an appointment', () => {

      cy.visit('https://katalon-demo-cura.herokuapp.com/');
      cy.get('#btn-make-appointment').click();
      cy.get('#txt-username').type('John Doe')
      cy.get('#txt-password').type('ThisIsNotAPassword')
      cy.get('#btn-login').click()
      cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
      cy.get('#chk_hospotal_readmission').check()
      cy.get('#txt_visit_date').click()
      cy.get('.datepicker-days .day:not(.old)').first().click()
      cy.get('#txt_comment').type('This is a test comment')
      cy.get('#btn-book-appointment').click()
      cy.contains('Appointment Confirmation').should('be.visible')
    
      })      

})