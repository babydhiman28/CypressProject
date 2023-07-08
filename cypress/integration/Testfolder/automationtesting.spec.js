/// <reference types="cypress"/>

describe('customSuite', function()
{
    it('LoginTest-FirstCase', function()
    {
        cy.visit('https://automationtesting.co.uk/')
        // cy.contains('Contact Us Form Test').click({force:true})
        // cy.get('[placeholder="First Name"]').type('Arshpreet')
        // cy.get('[name="last_name"]').type('Kaur')
        // cy.get('[placeholder="Email Address"]').type('arshkaur21@gmail.com')
        // cy.get('[placeholder="Comments"]').type('automation testing, selenium java')
        // cy.get('[type="submit"]').click()

        cy.contains('DropDown Checkbox Radio').click({force:true})
        cy.get('[id="demo-priority-normal"]').click({force:true})
        cy.get('[id="cb_red"]').uncheck({force:true})
        cy.get('[name="cb_blue"]').check({force:true})
        
        cy.get('[name="cars"]').select('BMW')
    })
})