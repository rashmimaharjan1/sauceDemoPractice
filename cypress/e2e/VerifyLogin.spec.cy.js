

describe('Login with POM test', () => {

  beforeEach(function (){
   cy.visit('/')
  })

  //for user 1
    it.only('login test for user1', () => {

    //load fixture data
    cy.fixture('loginData').as('loginData');
      
    //using fixture data below
  cy.get('@loginData').then((user) =>{
   
   cy.get('[data-test="username"]').type(user.user1.username)
      cy.wait(1000)
      cy.get('[data-test="password"]').type(user.user1.password)
    });
    cy.wait(1000)
     cy.get('#login-button').click()
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