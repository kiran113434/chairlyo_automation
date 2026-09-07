import { superadmin_delete } from "../support/locator";


describe("Branch Delete",()=>{
    
    beforeEach("jddj",()=>{
         cy.visit("https://qa02.stage.chairlyo.com/login")
    cy.xpath(" //input[@id='email']").type("skilladmin@test.com");
    cy.get("[name='password']").type("Skill@123");
    cy.xpath("//button[@type='submit']").click();



     });


    it("Delete",()=>{
        cy.contains("Branches").click().should('have.text','Branches')  
        cy.get(superadmin_delete.search_delete).clear().type('Mero_Branch')
        cy.xpath(superadmin_delete.delete_button).first().click({force:true})
        cy.get(superadmin_delete.type_delete).type('Delete Branches')
        
        cy.xpath(superadmin_delete.confirm_delete).should("exists").click({force:true})

    })
});