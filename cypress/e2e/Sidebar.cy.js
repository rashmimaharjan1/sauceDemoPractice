describe('Sidebar Functionality', ()=>{
    beforeEach(function (){
    cy.visit('inventory.html')
    cy.get('.bm-burger-button > button').click()
    cy.get('.bm-menu').should('be.visible') //hambuger icon should be clickable and side bar should appear
    })

    it('All items link is clickable and redirects to inventory page',() =>{
    cy.get('#inventory_sidebar_link').should('have.text','All Items').click()
    cy.url().should('contain','/inventory.html')
    })

    // it('About us link is clickable and redirects to saucelabs.com',()=>{
    // cy.get('#about_sidebar_link').should('have.text','About').click()
    // // cy.url().should('eq','https://saucelabs.com/')
    // })
    
    it('Should close sidebar when clicked on X icon',()=>{
    cy.get('.bm-cross-button > button').click() //X icon should be clickable
    cy.get('.bm-menu').should('be.hidden')
    })

    it.only('Validate logout redirects user to landing page',()=>{
        cy.get('#logout_sidebar_link').should('have.text','Logout').click().url().should('eq','https://www.saucedemo.com/v1/index.html')
    })
   })










