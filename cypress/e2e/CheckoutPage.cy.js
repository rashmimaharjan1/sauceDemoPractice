/// <reference types="cypress" />
describe('Checkout page1', () => {

  //visit first checkout page
  beforeEach(function (){
   cy.visit('checkout-step-one.html')
   cy.fixture('UserData').as('userData')
  })
  
it('Page title should have text Checkout: Your Information',()=>{
    cy.get('.subheader').should('have.text','Checkout: Your Information')
  })  
  it('Page should have form first name , last name and zip/postal code',()=>{
    cy.get('[data-test="firstName"]').should('exist').and('have.attr','placeholder','First Name')
    cy.get('[data-test="lastName"]').should('exist').and('have.attr','placeholder','Last Name')
    cy.get('[data-test="postalCode"]').should('exist').and('have.attr','placeholder','Zip/Postal Code')
  })
  it('Error message should show when firstname is empty ',()=>{
    cy.get('.btn_primary').click()
    cy.get('[data-test="error"]').should('be.visible')
    .and('have.text','Error: First Name is required')
  })
  it('Error message should show when lastname is empty ',()=>{
    cy.get('@userData').then((userInfo) =>{
      cy.get('[data-test="firstName"]').type(userInfo.firstName)
    })
    cy.get('.btn_primary').click()
    cy.get('[data-test="error"]').should('be.visible').and('have.text','Error: Last Name is required')
  })
  
  it('Error message should show when zip code is empty ',()=>{
    cy.get('@userData').then((userInfo) =>{
      cy.get('[data-test="firstName"]').type(userInfo.firstName)
      cy.get('[data-test="lastName"]').type(userInfo.lastName)
    })
    cy.get('.btn_primary').click()
    cy.get('[data-test="error"]').should('be.visible').and('have.text','Error: Postal Code is required')
  })

  it('With valid input, continue button should redirect user to Checkout Page2', ()=>{
    cy.get('@userData').then((userInfo) =>{
      cy.get('[data-test="firstName"]').type(userInfo.firstName)
      cy.get('[data-test="lastName"]').type(userInfo.lastName)
      cy.get('[data-test="postalCode"]').type(userInfo.postalCode)
      cy.get('.btn_primary').click().url().should('include','checkout-step-two.html')
    })
    
  })

  it.only('Finish button should redirect to Checkout Complete page',()=>{
    cy.visit('checkout-step-two.html').get('.subheader').should('have.text','Checkout: Overview')
    cy.get('.btn_action.cart_button').should('have.text','FINISH')
    .and('have.css','background-color','rgb(226, 35, 26)')
    .and('have.css','color','rgb(255, 255, 255)').click().url().should('be.eq','https://www.saucedemo.com/v1/checkout-complete.html')
    cy.get('.subheader').should('have.text','Finish')
    cy.get('h2').should('exist').and('have.text', 'THANK YOU FOR YOUR ORDER')
    
  })

})


