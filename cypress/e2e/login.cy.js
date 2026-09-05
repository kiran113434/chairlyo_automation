import { login_selector } from "../support/locator";

import { login_data } from "../fixtures/chairlyo_data";


describe("Login Test",()=>{
  
    it("login successfully",()=>{
        cy.visit("/login");
        cy.login();


    });
    it("invalid username , invalid password",()=>{
        cy.visit("/login")
        cy.get(login_selector.email).type(login_data.valid_email)
        cy.get(login_selector.password).type(login_data.valid_password)
        cy.xpath(login_selector.login_button).click()
        
    });

    it("valid username, invalid password",()=>{
        cy.visit("/login")
        cy.get(login_selector.email).type(login_data.valid_email)
        cy.get(login_selector.password).type(login_data.invalid_password)
        cy.xpath(login_selector.login_button).click()
        

    });
    it("invalid username, valid password",()=>{
        cy.visit("/login")
        cy.get(login_selector.email).type(login_data.invalid_email)
        cy.get(login_selector.password).type(login_data.valid_password)
        cy.xpath(login_selector.login_button).click()
        

    });
    it("forgot password",()=>{
        cy.visit("/login")
        cy.xpath(login_selector.forgot_password).click()
        cy.get(login_selector.forgot_password_email_box).type(login_data.valid_email)
        cy.get(login_selector.forgot_next).click()
        cy.xpath(login_selector.back_to_login).click()
    });

});