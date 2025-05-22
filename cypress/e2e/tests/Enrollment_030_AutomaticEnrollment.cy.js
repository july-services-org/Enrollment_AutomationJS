import PageObject from "../pageobject/PageObject";
import * as url from '../../support/urls'
describe('Automatic enrollment module test script for enrollment', () => {
        beforeEach(() => {
            cy.clearLocalStorage();
            cy.login_by_plan_password_and_ssn("01322710","954682312");
        });
    it('EN-AUT001:Verify Customize My Enrollment button redirects to Enroll Home page', () => {
        PageObject.registerObj.next_button_pro().click();
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.home_page_title().should('have.text',"Enrollment Test 401k");
    });
    it('EN-AUT002:Verify Accept Default Enrollment button redirects to Final Elections page', () => {
        PageObject.registerObj.next_button_pro().click();
        PageObject.automaticenrollmentObj.accept_default_enrollment_button().click();
        PageObject.finalelectionsObj.final_election_page_title().should('have.text',"Final Elections");
    });
    it('EN-AUT003:Verify Opt Out button redirects to Opt-Out Acknowledgement page', () => {
        PageObject.registerObj.next_button_pro().click();
        PageObject.automaticenrollmentObj.opt_out_button().click();
        PageObject.optoutObj.opt_out_page_title().should('have.text',"Opt-Out Acknowledgement");
    });

});