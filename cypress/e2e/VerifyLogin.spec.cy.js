

describe('Login page', () => {

  //run mochawesome reporter - npx cypress run --reporter mochawesome

  beforeEach(function (){
   cy.visit('/')
  })
    it.only('should login with valid username and password', () => {

    //load fixture data
    cy.fixture('loginData').as('loginData');
      
    //using fixture data below
  cy.get('@loginData').then((user) =>{
   
   cy.get('[data-test="username"]').type(user.user1.username)
      // cy.wait(1000)
      cy.get('[data-test="password"]').type(user.user1.password)
    });
    // cy.wait(1000)
    //login button should be red and text should be white
    cy.get('input#login-button').should('have.css','background-color','rgb(226, 35, 26)').and('have.css','color','rgb(255, 255, 255)').click()
   cy.url().should('eq','https://www.saucedemo.com/v1/inventory.html');
  });

//====================================================================
//for user 2
  it('login test for user2', () => {

    //load fixture data
    cy.fixture('loginData').as('loginData');
      //using fixture data below

    cy.get('@loginData').then((user) =>{
      cy.get('[data-test="username"]').type(user.user2.username)
      cy.wait(1000)
      cy.get('[data-test="password"]').type(user.user2.password)
    });
    cy.wait(1000)
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible').and('have.text','Epic sadface: Sorry, this user has been locked out.')
    
  });
  //====================================================================
//for user 3
it('login test for user3', () => {

  //load fixture data
    cy.fixture('loginData').as('loginData');
    //using fixture data below

  cy.get('@loginData').then((user) =>{
    cy.get('[data-test="username"]').type(user.user3.username)
    cy.wait(1000)
    cy.get('[data-test="password"]').type(user.user3.password)
  });
  cy.wait(1000)
  cy.get('#login-button').click()
});
//====================================================================
//for user 4
it('login test for user4', () => {

  //load fixture data
  cy.fixture('loginData').as('loginData');
    //using fixture data below

  cy.get('@loginData').then((user) =>{
    cy.get('[data-test="username"]').type(user.user4.username)
    cy.wait(1000)
    cy.get('[data-test="password"]').type(user.user4.password)
  }); 
  cy.wait(1000)
  cy.get('#login-button').click()
});


});