describe('Parameterized login test', ()=>{

  let userData;
    before(() =>{
        cy.fixture('loginData').then((data)=>{
            userData = data;
        })
    })
    beforeEach(function (){
   cy.visit('/')
  })
    //define test cases
    const testCases = [{
        user: 'user1',
        expectedUrl: '/inventory.html',
        shouldSucceed: true
    },
    {
        user: 'user2',
        expectedUrl: '/',
        shouldSucceed: false
    },
     {
        user: 'user3',
        expectedUrl: '/inventory.html',
        shouldSucceed: true
    },
     {
        user: 'user4',
        expectedUrl: '/inventory.html',
        shouldSucceed: true
    }
    ];

    testCases.forEach(({user,expectedUrl,shouldSucceed})=> {
        it(`should ${shouldSucceed ? 'succeed' : 'fail'} with ${user}`,function(){
          // Use the userData variable directly since it's defined in the outer scope
      const { username, password } = userData[user]; // Access user data correctly

           cy.get('[data-test="username"]').type(username)
           cy.get('[data-test="password"]').type(password)
           cy.get('input#login-button').click()

           // Add assertions based on shouldSucceed
      if(shouldSucceed) {
          cy.url().should('include', expectedUrl);
        } else {
          cy.url().should('include', '/'); // Adjust based on your application
          cy.get('[data-test="error"]').should('be.visible').and('have.text','Epic sadface: Sorry, this user has been locked out.'); // Adjust selector based on your app
        }
      })
    })
})