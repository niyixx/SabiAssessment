/// <reference types= "cypress" />
describe(' Sabi TestSuite', function()
{

  beforeEach(() => {
    cy.visit('https://deploy-preview-1421--sabi-staging.netlify.app')
  })

it('Validate that the Merchant can not login without a username', function(){
  //Clicks the Log in button
  cy.get('.sc-blChar').click()
  //Assertion for logging in without username:
if(
  //Button is disabled
  cy.get('.sc-iJKOTD').should('be.disabled')
  )
  {
    cy.log('Test passed')
  } 
  else {
    cy.log('Test failed')
  }

})


it('Validate that the Merchant can not login without a password', function(){
  cy.get('.sc-blChar').click()
  //Inputs Sabi username
  cy.get('.sc-eFegNN').type('08126601879')
  //Clicks the Log in button
  cy.get('.sc-iJKOTD').click()
  
  //Assertion for logging in without username:
if(
  //Button is disabled
  cy.get('.sc-iJKOTD').should('be.disabled')
  )
  {
    cy.log('Test passed')
  } 
  else {
    cy.log('Test failed')
  }

})


it('Validate that Merchant can login to Sabi successfully', function() {
  cy.get('.sc-blChar').click()
  cy.get('.sc-eFegNN').type('08126601879')
  cy.get('.sc-iJKOTD').click()
  
  //Enter an invalid password
  cy.get('#1').type('0');
  cy.get('#2').type('0');
  cy.get('#3').type('1');
  cy.get('#4').type('0');
  cy.get('#5').type('0');
  cy.get('#6').type('1');
  
  cy.get('.sc-iJKOTD').click()

  //Assetion for invalid password
if(
  //Error message should be displayed 
  cy.get('.Toastify__toast-body').should('be.visible'))
  {
    cy.log('Test passed')
  } 
  else {
    cy.log('Test failed')
  }
  
})


it('Validate that Merchant can click the forgot your pin text', function() {
  cy.get('.sc-blChar').click()
  cy.get('.sc-eFegNN').type('08126601879')
  cy.get('.sc-iJKOTD').click()
  
  //click on the forgot your pin text
  cy.get('.sc-RbDrd').click()

  //Assetion for forgot password page
if(
  //Did you forget your pin text is displayed
  cy.get('.sc-gUQvok').should('be.visible'))
  {
    cy.log('Test passed')
  } 
  else {
    cy.log('Test failed')
  }
  
})


it('Validate that Merchant can click the switch account text', function() {
  cy.get('.sc-blChar').click()
  cy.get('.sc-eFegNN').type('08126601879')
  cy.get('.sc-iJKOTD').click()
  //click on the switch account text
  cy.get('.sc-faZScy').click()

  //Assetion for switching account
if(
  //Welcome to Sabi text is displayed
  cy.get('.sc-iqseJM').should('be.visible'))
  {
    cy.log('Test passed')
  } 
  else {
    cy.log('Test failed')
  }
  
})


it('Validate that Merchant can login to Sabi successfully', function() {
  cy.get('.sc-blChar').click()
  cy.get('.sc-eFegNN').type('08126601879')
  cy.get('.sc-iJKOTD').click()


cy.get('#1').type('0');
cy.get('#2').type('0');
cy.get('#3').type('0');
cy.get('#4').type('0');
cy.get('#5').type('0');
cy.get('#6').type('0');

cy.get('.sc-iJKOTD').click()



//Assertions for Sabi Login Acceptance Criteria:
/*if(
  //Online status 
  cy.get('.sc-bKpECt').should('be.visible'),
  //Merchant name
  cy.get('.sc-exCahv').should('be.visible'),
  //Home icon
  cy.get('.sc-guNdNy').should('be.visible')
)
{
  cy.log('Test passed')
} 
else {
  cy.log('Test failed')
}
*/
})

})