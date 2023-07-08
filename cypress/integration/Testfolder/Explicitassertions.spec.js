/// <reference types="cypress"/>

describe('Explicit Assertions', () => {
    it('.should() - make an assertion about the current subject', () => {
        // test step to launch a url
        cy.visit('/')
        //explicit assertion
        expect(true).to.be.true
        let name = 'cypress';
        expect(name).to.be.equal('cypress')
        // Using Assert
        assert.equal(7,7,'Equal numbers')
    })
})