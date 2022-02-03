
describe('MyTestSuite',function()
{
    it('verify Title of the page positive',function()
    {
        cy.visit('/')
        cy.title().should('eq','nopCommerce demo store')
    })

    it('verify Title of the page negative',function()
    {
        cy.visit('/')
        cy.title().should('eq','nopCommerce  store')
    })

})