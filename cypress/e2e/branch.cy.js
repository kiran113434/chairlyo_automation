import { branch_selector } from "../support/locator";
import { branch_data } from "../fixtures/chairlyo_data";


describe("Branch CRUD",()=>{
    beforeEach("jddj",()=>{
         cy.visit("https://qa02.stage.chairlyo.com/login")
    cy.xpath(" //input[@id='email']").type("skilladmin@test.com");
    cy.get("[name='password']").type("Skill@123");
    cy.xpath("//button[@type='submit']").click();



     });




    it("branch add",()=>{
        // cy.visit("https://qa02.stage.chairlyo.com/")
        cy.xpath(branch_selector.add_branch).click({force: true})
        // cy.get(".lg\:hidden > .group\/button").click()
        // cy.contains("Add BRanch").click();

        cy.get(branch_selector.branch).clear().type(branch_data.branch_name)
        cy.get(branch_selector.slug).clear().type(branch_data.slug)
        cy.get(branch_selector.phone).eq(0).clear({force:true}).type(branch_data.phone)
        cy.get(branch_selector.email).clear().type(branch_data.email)
        // cy.get(branch_selector.status).select("active")
          cy.get(branch_selector.address).clear().type(branch_data.address)
        //   cy.get(branch_selector).type()
          cy.get(branch_selector.first_name).type(branch_data.first_name)
          cy.get(branch_selector.last_name).type(branch_data.last_name)
          cy.get(branch_selector.admin_email).type(branch_data.admin_email)
          cy.get(branch_selector.password).type(branch_data.password)
            //  cy.xpath(branch_selector.admin_phone).eq(1).clear({force:true}).type(branch_data.admin_phone)
                    cy.get(branch_selector.phone).eq(1).clear({force:true}).type(branch_data.phone)
                    cy.xpath(branch_selector.save_changes).click()



    });

});