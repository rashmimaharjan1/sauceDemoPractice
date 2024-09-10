import Login from "../PageObjects/LoginPagePOM";

describe('Login page', () => {

  //run mochawesome reporter - npx cypress run --reporter mochawesome
  const ln = new Login();
  beforeEach(function (){
   cy.visit('/')
    cy.fixture('loginData').as('loginData');
  })

 //========================================================================
    it('valid username and password', () => {
    cy.get('@loginData').then((user) =>{

    ln.enterUsername(user.user1.username)
    ln.enterPassword(user.user1.password)
    });
      //login button should be red and text should be white
    ln.verifyCss();
    ln.clickLogin();
    ln.verifyRedirectUrl();
  });

//====================================================================
//for user 2
  it('login test for user2', () => {

    cy.get('@loginData').then((user) =>{
      ln.enterUsername(user.user2.username)
    ln.enterPassword(user.user2.password)
    });
      //login button should be red and text should be white
    ln.verifyCss();
    ln.clickLogin()
     //error message should show
     ln.errMessage();
      ln.errorButton();
  });
  //====================================================================
//for user 3
it('login test for user3', () => {

  cy.get('@loginData').then((user) =>{
    ln.enterUsername(user.user3.username)
    ln.enterPassword(user.user3.password)
    });
      //login button should be red and text should be white
    ln.verifyCss();
    ln.clickLogin()
});
//====================================================================
//for user 4
it('login test for user4', () => {
  cy.get('@loginData').then((user) =>{
    ln.enterUsername(user.user4.username)
    ln.enterPassword(user.user4.password)
    });
      //login button should be red and text should be white
    ln.verifyCss();
    ln.clickLogin()
    ln.verifyRedirectUrl()
});


});