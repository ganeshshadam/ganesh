/// <reference types="cypress" />

describe('items purchase',function()
{
it('laptops',function()
{
    cy.visit('https://demo.nopcommerce.com/') //open the url
    cy.get('#small-searchterms').type('Nokia Lumia 1020') //search box
    cy.get('[type="submit"]').click() //click on search button
 cy.get('.product-box-add-to-cart-button').click()
    cy.get('.cart-label').click()
    //cy.get('.product-subtotal').contains('$349.00') // validation


})
})