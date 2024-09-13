describe('Accessibility tets', ()=>{
    it('should log any accessibility failures',()=>{
        cy.visit('/')
        cy.injectAxe()
        cy.checkA11y()
    }) 
})