describe('Login Saucedemo', () => {
 
it('Cenário 1: Realizar login com sucesso', () => {
  cy.visit('https://www.saucedemo.com/')

  //acao

  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
 
  //validando a url que loga com usuario autenticao que acesso
  cy.url().should('eq','https://www.saucedemo.com/inventory.html')
  

  })
 

})
