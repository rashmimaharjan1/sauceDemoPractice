
class Login {

    
//returning selectors
visitLoginPage(){
    cy.visit('/')
}
    userInputField(){ 
        return cy.get('[data-test="username"]')
    }
    passwordInputField(){
        return cy.get('[data-test="password"]')
    }

    LoginButton(){
        return cy.get('input#login-button')
    }

    GetErrorMessage(){
      return  cy.get('[data-test="error"]')
    }

    ErrorButton(){
        return cy.get('.error-button')
    }


    //performing actions
    enterUsername(username){
    this.userInputField().type(username); //performing action
    }

    enterPassword(password){
       this.passwordInputField().type(password);
    }

    verifyCss(){
        this.LoginButton().should('have.css','background-color','rgb(226, 35, 26)').and('have.css','color','rgb(255, 255, 255)');
    }
    clickLogin(){
        this.LoginButton().click()
       
    }
    verifyRedirectUrl(){
         cy.url().should('eq','https://www.saucedemo.com/v1/inventory.html')
    }
    
    errMessage(){
    this.GetErrorMessage().should('be.visible').and('have.text','Epic sadface: Sorry, this user has been locked out.')   
    }

    errorButton(){
        this.ErrorButton().click();
    }
    
}
module.exports = new Login();