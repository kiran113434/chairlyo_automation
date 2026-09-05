import { branch_session } from "../support/locator"


const uniqueEightDigits = Date.now().toString().slice(-8);

describe("dkdka",()=>{
    
   beforeEach("jddj",()=>{
         cy.visit("https://qa02.stage.chairlyo.com/login")
    cy.xpath(" //input[@id='email']").type("skilladmddin@test.com");
    cy.get("[name='password']").type("Skill@123");
    cy.xpath("//button[@type='submit']").click();



     });
    it("ddfd",()=>{
        // cy.visit("")
        cy.contains('Sessions').click();
        // cy.xpath(branch_session.session).click();
        cy.xpath(branch_session.new_session).click();
        cy.get(branch_session.search_customer).type("Kiran ho_la")
        cy.contains('Add as new customer').click();
        // cy.get(branch_session.add_new_customer).click() // add new customer
        cy.get(branch_session.phone_number).clear({force:true}).type(`+977 98${uniqueEightDigits}`);

        cy.xpath(branch_session.session_next).click()
        cy.xpath(branch_session.click_add_first_service).click()
        cy.xpath(branch_session.add_first_search_service).click() // assign staff to all sevices
        cy.xpath(branch_session.add_first_done).click() // add your first service 
         cy.xpath(branch_session.select_staff).click()
        cy.xpath(branch_session.assign_staff).click()
        cy.xpath(branch_session.add_to_session).click({force: true}) // add to session 
    })
})