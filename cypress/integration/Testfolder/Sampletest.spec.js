/// <reference types="cypress"/>

describe('customSuite', function()
{
    it('LoginTest-FirstCase', function()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
    })
})