import PageObject from "../pageobject/PageObject";
import * as url from '../../support/urls'
describe('UpdateProfile module test script for enrollment', () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.login_by_plan_password_and_ssn("01322710","954682312");
    });
    it('UPDT-INFO001:Verify Your Profile link text takes to Update Personal Information page', () => {
        PageObject.registerObj.next_button_pro().click();
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.user_login_dropdown_link().click();
        PageObject.enrollhomeObj.your_profile_link().click();
        PageObject.updateinfoObj.update_page_title_text().should('have.text','Update Personal Information');
    });
    it('UPDT-INFO002:Verify validation error for Update Personal Information page', () => {
        PageObject.registerObj.next_button_pro().click();
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.user_login_dropdown_link().click();
        PageObject.enrollhomeObj.your_profile_link().click();
        PageObject.updateinfoObj.first_name_text_field().clear();
        PageObject.updateinfoObj.last_name_text_field().clear();
        PageObject.updateinfoObj.dob_text_field().clear();
        PageObject.updateinfoObj.mobile_phone_text_field().clear();
        PageObject.updateinfoObj.annual_compensation_text_field().clear();
        PageObject.updateinfoObj.email_address_text_field().clear();
        PageObject.updateinfoObj.confirm_email_address_text_field().clear();
        PageObject.updateinfoObj.update_address_information_link().click();
        PageObject.updateinfoObj.address_1_text_field().clear();
        PageObject.updateinfoObj.city_text_field().clear();
        PageObject.updateinfoObj.zip_text_field().clear();
        PageObject.updateinfoObj.save_button().should('be.disabled');
        PageObject.updateinfoObj.review_personal_information_link().click();
        PageObject.updateinfoObj.dob_text_field().type("10/10/2020");
        PageObject.updateinfoObj.dob_error_message().should('have.text'," You are not eligible to enroll at this time due to the age requirement. Please contact Participant Services for more information at 888.333.6315, Option 1. ");
    });
    it('UPDT-INFO003:Verify Update functionality for Update Personal Information page', () => {
        PageObject.registerObj.next_button_pro().click();
        PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
        PageObject.enrollhomeObj.user_login_dropdown_link().click();
        PageObject.enrollhomeObj.your_profile_link().click();
        PageObject.registerObj.first_name_text_field().clear().type("Al");
        PageObject.updateinfoObj.update_address_information_link().click();
        PageObject.updateinfoObj.save_button().click();
        PageObject.updateinfoObj.success_message().should('have.text'," Your profile information updated successfully. ");
    });

});