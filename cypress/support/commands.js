// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
//
import LoginLocator from "../e2e/pages/LoginPage";
import * as url from ".././support/urls";
const loginObj=new LoginLocator();
Cypress.Commands.add('login_by_plan_password_and_ssn',(plan_password,ssn)=>{
    cy.visit(url.testUrl);
    loginObj.plan_password_text_field().type(plan_password);
    loginObj.next_button().click();
    loginObj.ssn_text_field().type(ssn);
    loginObj.next_button().click();
    loginObj.click_to_register_button().click();
    cy.url().should('eq','http://bearypotter.julyservices.local:9030/register/personal-info');
})
Cypress.Commands.add('Reset_Enrollment_Status',()=>{
    cy.visit("https://unifytest.julyservices.local/Unify.V2.Web/login");
    cy.xpath("//input[@placeholder='User Name']").clear().type("alamin");
    cy.xpath("//input[@placeholder='Password']").clear().type("123");
    cy.xpath("//button[@type='submit']").click();
    // cy.xpath("//button[@title='Global Search']").click();
    // cy.get("#mat-input-0").click().type("954682312");
    cy.wait(2000);
    // cy.get(".search-form-outer > .jds-btn").click();
    // cy.get('[data-kendo-grid-column-index="1"] > .ng-star-inserted').invoke("attr","target","_self").click();
    cy.visit("https://unifytest.julyservices.local/Unify.V2.Web/relius-person/detail/453075704/~2BCCi4sW6N6EVS2t4hilBaztDFu3VUsOWKUozaXrjOA8~3D/01322710");
    cy.wait(2000);
    cy.get(":nth-child(1) > :nth-child(4) > .txt-ellipsis > .active").click();
    cy.wait(1000);
    cy.xpath("//label[@for='mat-radio-8-input']").click();
    cy.wait(1000);
    cy.xpath("//button[normalize-space()='Save']").click();
})

Cypress.Commands.add('Unlock_LOCK_Status',()=>{
    cy.visit("https://unifytest.julyservices.local/Unify.V2.Web/login");
    cy.xpath("//input[@placeholder='User Name']").clear().type("alamin");
    cy.xpath("//input[@placeholder='Password']").clear().type("123");
    cy.xpath("//button[@type='submit']").click();
    cy.wait(2000);
    cy.visit("https://unifytest.julyservices.local/Unify.V2.Web/relius-person/detail/453075704/J24omqjquVNOECI1chFidNESac89PRjeAYteUGiE2Z8~3D/01322710");
    cy.wait(2000);
    cy.xpath("//input[@id='checkbox-lock-icon']").click();
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
