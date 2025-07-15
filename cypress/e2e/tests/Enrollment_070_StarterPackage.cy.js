import PageObject from "../pageobject/PageObject";
const test_data=require("../fixtures/login_data.json");
describe('Starter Package module test script for enrollment', () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.login_by_plan_password_and_ssn(test_data.Valid1.plan_password,test_data.Valid1.ssn);
        cy.visit("http://bearypotter.julyservices.local:9030/register/auto-enrollment");
    });
   it('QUI-EN001:Verify Fund Fact Sheet opens by clicking the Investment Name', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.quick_enroll_select_button().click();
        PageObject.starterpackageObj.fund_fact_sheet().eq(0).invoke('removeAttr','target').should('be.visible').click();
        cy.go('back');
   });
   it('QUI-EN002:Verify Change the Contribution type change the contribution type of the starter package', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.quick_enroll_select_button().click();
        cy.scrollTo('bottom');
        PageObject.starterpackageObj.change_to_roth_contribution_type_text().should('be.visible').click();
        PageObject.starterpackageObj.change_to_pretax_contribution_type_text().should('be.visible').click();
    
   });
   it('QUI-EN003:Verify Change Automatic Increase button opens the Update Auto Increase popup', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.quick_enroll_select_button().click();
        cy.scrollTo('bottom');
        PageObject.starterpackageObj.change_automatic_increase_text().click();
        PageObject.starterpackageObj.update_auto_increase_pop_up_title().should('be.visible').and('have.text',"Update Auto Increaseclose");
   });
   it('QUI-EN004 and QUI-EN005:Verify validation error for incorrect Increase Rate', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.quick_enroll_select_button().click();
        cy.scrollTo('bottom');
        PageObject.starterpackageObj.change_automatic_increase_text().click();
        PageObject.starterpackageObj.increase_rate_input_field().clear().type("101");
        PageObject.starterpackageObj.update_button().click();
        PageObject.starterpackageObj.error_message().should('have.text',"Can not allow less than 1% or more than 100%.");
        PageObject.starterpackageObj.increase_rate_input_field().clear().type("3");
        PageObject.starterpackageObj.update_button().click();
   });
   it('QUI-EN006:Verify Customize Enrollment button takes to the Enrollment Home page', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.quick_enroll_select_button().click();
        cy.scrollTo('bottom');
        PageObject.starterpackageObj.customize_enrollment_text().click();
        PageObject.enrollhomeObj.home_page_title().should("have.text","Enrollment Test 401k")
   });
   it('QUI-EN007:Verify Final Elections page appears after selecting any starter package', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.quick_enroll_select_button().click();
        PageObject.starterpackageObj.good_select_button().click();
        PageObject.finalelectionsObj.final_election_page_title().should('have.text',"Final Elections");
   });
   it('QUI-EN008:Verify Add Beneficiary button adds new Input boxes & dropdowns to select value', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.quick_enroll_select_button().click();
        PageObject.starterpackageObj.good_select_button().click();
        PageObject.finalelectionsObj.full_name_input_field().should("be.visible");
        PageObject.finalelectionsObj.dob_input_field().should("be.visible");
        PageObject.finalelectionsObj.relationship_dd_field().should("be.visible");
        PageObject.finalelectionsObj.primary_input_field().should("be.visible").clear().type("100");
        PageObject.finalelectionsObj.contingent_input_field().should("be.visible");
   });
   it('QUI-EN009:Verify validation error for blank Beneficiary & not selecting Primary beneficiary', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.quick_enroll_select_button().click();
        PageObject.starterpackageObj.good_select_button().click();
        PageObject.finalelectionsObj.warning_close_button().click();
        PageObject.finalelectionsObj.at_least_one_primary_beneficiary_warning_message().should('have.text'," You must add at least one Primary Beneficiary. ");
        PageObject.finalelectionsObj.next_button().should('be.disabled');
   });
   it('QUI-EN0010:Verify validation error for not meeting % limit for Primary & Contingent type beneficiary', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.quick_enroll_select_button().click();
        PageObject.starterpackageObj.good_select_button().click();
        PageObject.finalelectionsObj.primary_input_field().clear().type("110");
        PageObject.finalelectionsObj.contingent_input_field().click();
        PageObject.finalelectionsObj.primary_beneficiary_percentage_must_total_100_error_message().should('be.visible');
        PageObject.finalelectionsObj.warning_close_button().click();
        PageObject.finalelectionsObj.add_contingent_beneficiary_button().click();
        PageObject.finalelectionsObj.contingent_input_field().clear().type("50").blur();
        PageObject.finalelectionsObj.contingent_beneficiary_percentage_must_total_100_error_message().should('be.visible');

   });
   it('QUI-EN0011:Verify clicking the Download Paper Beneficiary Form link text downloads the form', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.quick_enroll_select_button().click();
        PageObject.starterpackageObj.good_select_button().click();
        PageObject.finalelectionsObj.click_to_download_beneficiary_form().invoke('removeAttr','target').should('be.visible').click();
        cy.go('back');

   });
   it('QUI-EN0012:Verify mandatory field validation when Automatic Investment Rebalance selects as Yes', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.quick_enroll_select_button().click();
        PageObject.starterpackageObj.good_select_button().click();
        PageObject.finalelectionsObj.air_yes_radio_button().click();
        PageObject.finalelectionsObj.next_button().should('be.disabled');
   });
   it('QUI-EN0013:Verify Rollover Contribution Instructions popup window appears clicking on Rollover  Instructions button', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.quick_enroll_select_button().click();
        PageObject.starterpackageObj.good_select_button().click();
        PageObject.finalelectionsObj.rollover_instructions_button().click();
        PageObject.finalelectionsObj.rollover_contribution_instructions_title().should('have.text',"Rollover Contribution Instructions");
   });
   it('QUI-EN0014:Verify Review and Submit page appears with valid data from Final Elections page', () => {
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.quick_enroll_select_button().click();
        PageObject.starterpackageObj.good_select_button().click();
        cy.wait(2000);
        PageObject.finalelectionsObj.full_name_input_field().clear().type("Tania");
        PageObject.finalelectionsObj.dob_input_field().clear().type("12/31/2000");
        PageObject.finalelectionsObj.relationship_dd_field().select("0: Spouse");
        PageObject.finalelectionsObj.primary_input_field().clear().type("100").blur();
        cy.scrollTo('bottom');
        PageObject.finalelectionsObj.next_button().should('be.enabled').click({force:true});
        PageObject.reviewandsubmitObj.review_and_submit_title().should('have.text',"Review and Submit");
   });
   
});