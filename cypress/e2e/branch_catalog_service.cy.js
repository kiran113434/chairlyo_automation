import { branch_add_service } from "../support/locator";

describe("",()=>{
    
   beforeEach("jddj",()=>{
         cy.visit("https://qa02.stage.chairlyo.com/login")
    cy.xpath(" //input[@id='email']").type("skilladmddin@test.com");
    cy.get("[name='password']").type("Skill@123");
    cy.xpath("//button[@type='submit']").click();



     });

    

    it("Services",()=>{
        cy.contains('Catalog').click();
        cy.contains('Services').click();
        cy.contains('Add Service').click()
        // cy.get(branch_add_service.add_service).click()
        cy.get(branch_add_service.service_name).type("Brick Picker")
        // cy.xpath(branch_add_service.service_category).type("Brick Picker")
        cy.xpath(branch_add_service.service_category).click()
        cy.xpath(branch_add_service.service_category_type).click()
        cy.get(branch_add_service.price).type(344)
        cy.get(branch_add_service.duration).type(50)
        cy.xpath(branch_add_service.commision).click()
        cy.xpath(branch_add_service.commision_type).click()
        cy.xpath(branch_add_service.add_service_click ).click({force:true})
        // cy.contains('Add Service').click()
    })

})