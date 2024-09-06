describe('Inventory page',()=>{
    
    beforeEach(function (){
   cy.visit('inventory.html')
  })
  it('Page title should be Products',()=>{
    cy.get('.product_label').should('have.text','Products')
  })
 it('Sorting should have Name A to Z selected by default',()=>{
  cy.get('.product_sort_container').should('have.value','az') //sorting value by default
  
  cy.get('.product_sort_container') //should have dropdown options 
      .should('be.visible')
      .within(() => {
        cy.contains('Name (A to Z)').should('exist');
        cy.contains('Name (Z to A)').should('exist');
        cy.contains('Price (low to high)').should('exist');
        cy.contains('Price (high to low)').should('exist');
      });
   cy.get('.product_sort_container').select('Price (low to high)').should('have.value','lohi') //select one of the option from the dropdown
 })
 
 it('Inventory list card should have image, item title, description, price and Add to cart button',()=>{
  cy.get('.inventory_list').each((card)=>{
    cy.wrap(card).find('.inventory_item_img').should('exist')
    cy.wrap(card).find('.inventory_item_label > a').should('exist')
    cy.wrap(card).find('.inventory_item_label > .inventory_item_desc').should('exist')
    cy.wrap(card).find('.pricebar > .inventory_item_price').should('exist')
    cy.wrap(card).find('.pricebar > .btn_inventory').should('exist')
  })
 })

  it('Add to cart should be clickable and should change to Remove button', ()=>{
    cy.get(':nth-child(1)  > .pricebar > .btn_primary').should('have.text','ADD TO CART').click().should('be.visible','.btn_secondary .btn_inventory"').and('have.text','REMOVE')
    .and('have.css','background-color','rgb(255, 255, 255)')
    .and('have.css','border', '2px solid rgb(71, 76, 85)')
    .and('have.css','color','rgb(71, 76, 85)')
    cy.get('.shopping_cart_container').find('a  > .shopping_cart_badge').should('be.visible')
    .and('have.css','background-color','rgb(255, 37, 58)')
    .and('have.css','color','rgb(255, 255, 255)')
  })
  
  it('Item title should be red and clickable',()=>{
cy.get('#item_4_title_link > .inventory_item_name').should('have.css','color','rgb(226, 35, 26)').click()
  })

  it('Price figure should be red', ()=>{
    cy.get(':nth-child(1) > .pricebar > .btn_primary').should('have.css','color','rgb(226, 35, 26)').should('have.css','border','2px solid rgb(226, 35, 26)').should('have.css','background-color','rgb(255, 255, 255)')
  })

  it('Cart icon should be clickable',()=>{
    cy.get('#shopping_cart_container > a').click().url().should('eq','https://www.saucedemo.com/v1/cart.html')
  })
})