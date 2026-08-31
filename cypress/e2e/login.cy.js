describe("Login Test",()=>{
  
    it("login successfully",()=>{
        cy.visit("/login");
        cy.login();


    });

});