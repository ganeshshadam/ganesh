/// <reference types="cypress" />

describe('Locating Elements',function()
{
it('verify types of locators',function()
{
   cy.visit('http://demowebshop.tricentis.com/register')
   cy.get('#gender-male').click()
   cy.get('#FirstName').type('ganesh')
   cy.get('#LastName').type('shadam')
   cy.get('#Email').type('gani@gmail.com')
   cy.get('#Password').type('ganesh12345')
   cy.get('#ConfirmPassword').type('ganesh12345')
   cy.get('#register-button').click()
    
    

})
})