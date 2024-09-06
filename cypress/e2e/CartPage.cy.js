describe('Cart Page',()=>{
    beforeEach(function(){
        cy.visit('cart.html')
    })

    it('should have page title Your Cart',()=>{
        cy.get('.subheader').should('have.text','Your Cart').and('have.css','background-color','rgb(71, 76, 85)')
    })

    it('Continue shoping should be clickable and redirects to inventory page',()=>{
        cy.get('a.btn_secondary').should('have.text','Continue Shopping')
        .click().url('eq','/inventory.html')
    })

    it('Checkout button should be clickable and redirect to the checkout page', ()=>{
        cy.get('.btn_action').should('have.text','CHECKOUT')
        .and('have.css','background-color','rgb(226, 35, 26)')
        .and('have.css','color','rgb(255, 255, 255)').click()
        .url().should('contain','/checkout-step-one.html')
     })

    //  it('',()=>{
    //     cy.get('.cart_item')
    //     cy.get('.cart_item_label > .btn_secondary.cart_button').should('have.text','REMOVE').click().should('have.class','.removed_cart_item')
    //  })
})