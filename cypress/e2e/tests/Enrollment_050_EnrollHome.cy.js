import PageObject from "../pageobject/PageObject";
const test_data=require("../fixtures/login_data.json");
describe('EnrollHome module test script for enrollment', () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.login_by_plan_password_and_ssn(test_data.Valid1.plan_password,test_data.Valid1.ssn);
        cy.visit("http://bearypotter.julyservices.local:9030/register/auto-enrollment");
    });
    it('EN-HOM001:Verify Custom Enroll button redirects to Select Contribution Rate page', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.custom_enroll_select_button().click();
        PageObject.selectcontributerateObj.select_contribute_rate_title_text().should("have.text","Select Contribution Rate");
    });
    it('EN-HOM002:Verify Quick Enroll button redirects to Select Starter Package page', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.quick_enroll_select_button().click();
        PageObject.starterpackageObj.select_starter_package_title_text().should('have.text'," Select Starter Package");
        PageObject.starterpackageObj.good_title_text().should("have.text","Good");
        PageObject.starterpackageObj.better_title_text().should("have.text","Better");
        PageObject.starterpackageObj.best_title_text().should("have.text","Best");
    });
    it('EN-HOM004:Verify Opt Out button redirects to Opt-Out Acknowledgement page', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.opt_out_select_button().click();
        PageObject.optoutObj.opt_out_page_title().should('have.text',"Opt-Out Acknowledgement");
    });
});