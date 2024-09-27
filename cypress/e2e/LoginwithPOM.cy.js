import Login from "../PageObjects/LoginPage.js";

describe('Login page', () => {

  //run mochawesome reporter - npx cypress run --reporter mochawesome
  // const ln = new Login(); //how to export the object directly from the class file. [direct object from page object]
  //used Login as object directly
  beforeEach(function (){
   Login.visitLoginPage();
    cy.fixture('loginData').as('loginData');
  })

 //========================================================================
    it('valid username and password', () => {
    cy.get('@loginData').then((user) =>{

    Login.enterUsername(user.user1.username)//used Login as object directly
    Login.enterPassword(user.user1.password)
    });
      //login button should be red and text should be white
    Login.verifyCss();
    Login.clickLogin();
    Login.verifyRedirectUrl();
  });

//====================================================================
//for user 2
  it('login test for user2', () => {

    cy.get('@loginData').then((user) =>{
      Login.enterUsername(user.user2.username)
    Login.enterPassword(user.user2.password)
    });
      //login button should be red and text should be white
    Login.verifyCss();
    Login.clickLogin()
     //error message should show
     Login.errMessage();
      Login.errorButton();
  });
  //====================================================================
//for user 3
it('login test for user3', () => {

  cy.get('@loginData').then((user) =>{
    Login.enterUsername(user.user3.username)
    Login.enterPassword(user.user3.password)
    });
      //login button should be red and text should be white
    Login.verifyCss();
    Login.clickLogin()
});
//====================================================================
//for user 4
it('login test for user4', () => {
  cy.get('@loginData').then((user) =>{
    Login.enterUsername(user.user4.username)
    Login.enterPassword(user.user4.password)
    });
      //login button should be red and text should be white
    Login.verifyCss();
    Login.clickLogin()
    Login.verifyRedirectUrl()
});


});