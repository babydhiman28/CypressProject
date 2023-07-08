/// <reference types="cypress"/>

describe('Implicit Assertions', () => {
    it('.should() - make an assertion about the current subject', () => {
        cy.visit('https://example.cypress.io/')
        cy.contains('get').click()
        //implicit assertion using should
        cy.get('#query-btn').should('contain','Button')
        // chaining the assertion using and 
        cy.get('#query-btn').should('contain','Button').and
        ('have.class','query-btn')
    })
})