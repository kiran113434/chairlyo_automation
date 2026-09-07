import { branch_logout } from "../support/locator";


describe("Branch Logout",()=>{
  beforeEach("jddj",()=>{
         cy.visit("https://qa02.stage.chairlyo.com/login")
    cy.xpath(" //input[@id='email']").type("skilladmddin@test.com");
    cy.get("[name='password']").type("Skill@123");
    cy.xpath("//button[@type='submit']").click();



     });

    it("Logout",()=>{
        cy.contains("amad diallo").click()
        cy.xpath(branch_logout.logout).click()
        cy.get(branch_logout.confirm_logout).click({force:true })
        // cy.contains("Logout").click({force:true})
})
})