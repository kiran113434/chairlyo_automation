import { branch_waiting } from "../support/locator";

describe("Waiting for you pyari",()=>{
      beforeEach("jddj",()=>{
         cy.visit("https://qa02.stage.chairlyo.com/login")
    cy.xpath(" //input[@id='email']").type("skilladmddin@test.com");
    cy.get("[name='password']").type("Skill@123");
    cy.xpath("//button[@type='submit']").click();



     });

     it("Branch Waiting",()=>{
        cy.contains("Waiting").click()
        cy.contains("Add Waiting").click()
        // cy.get(branch_waiting.add_waiting).click()
        cy.get(branch_waiting.search_customer).type("Timi ho")
        cy.get(branch_waiting.timi_ho).click()
        cy.get(branch_waiting.next).click()
        cy.xpath(branch_waiting.add_your_first_service).click()
        cy.xpath(branch_waiting.brick_picker).click()
        cy.xpath(branch_waiting.brick_picker_done).click()
        cy.xpath(branch_waiting.assign_staff_selector).click()
        cy.xpath(branch_waiting.assign_staff).click()
        cy.xpath(branch_waiting.add_waiting_click).click()
        cy.xpath(branch_waiting.start_session).click()
        cy.xpath(branch_waiting.complete_session).click()         
        cy.xpath(branch_waiting.complete_session_2).click({multiple:true })
        cy.xpath(branch_waiting.process).click()

     })

})