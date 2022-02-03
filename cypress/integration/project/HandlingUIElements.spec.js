/// <reference types="cypress" />

describe('UI Elements',function()
{
it('Verify Inputbox & Radio buttons',function()
{
  cy.visit("https://demo.guru99.com/test/newtours/") //visit URL
  cy.url().should('include','newtours') //Verify URL should include newtours
    cy.get('input[name="userName"]').should('be.visible').should('be.enabled').type('ganesh')
    cy.get('input[name="password"]').should('be.visible').should('be.enabled').type('ganesh')
    cy.get('input[name="submit"]').should('be.visible').click()
    cy.title().should('eq','Login: Mercury Tours') // Title verification
     cy.get(':nth-child(2) > [width="80"] > a').click()
        //Radio Buttons
     cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked') //visibility check

     cy.get('input[value="oneway"]').should('not.be.checked').click() //visibil
     cy.get('input[name="findFlights"]').should('be.visible').click() //continue


})
})