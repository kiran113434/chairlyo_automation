import { superadmin_update } from "../support/locator";

describe("Branch Update",()=>{
    

    beforeEach("jddj",()=>{
         cy.visit("https://qa02.stage.chairlyo.com/login")
    cy.xpath(" //input[@id='email']").type("skilladmin@test.com");
    cy.get("[name='password']").type("Skill@123");
    cy.xpath("//button[@type='submit']").click();



     });


    it("update",()=>{
        cy.contains("Branches").click()
        cy.xpath(superadmin_update.search).type("mero_branch")
        // cy.contains("ACTIONS")
        //    cy.xpath(superadmin_update.edit_branch).click()
       cy.xpath("//a[contains(@title, 'Edit branch')]").first().click()
       cy.xpath(superadmin_update.edit_branch_name).clear().type("afno_branch")
       
        
        cy.xpath(superadmin_update.save_changes).click()
    })
}) 