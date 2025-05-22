import PageObject from "../pageobject/PageObject";
import * as url from '../../support/urls'
describe('Register module test script for enrollment', () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.login_by_plan_password_and_ssn("01322710","000000062");
    });
    it('EN-REG001:Verify validation error for Personal Information window', () => {
        PageObject.registerObj.first_name_text_field().clear();
        PageObject.registerObj.last_name_text_field().clear();
        PageObject.registerObj.date_of_birth_text_field().clear();
        PageObject.registerObj.marital_status_combo_box().select('1: M');
        PageObject.registerObj.annual_compensation_text_field().clear();
        PageObject.registerObj.address1_text_field().clear();
        PageObject.registerObj.address2_text_field().clear();
        PageObject.registerObj.city_text_field().clear();
        PageObject.registerObj.zip_text_field().clear();
        PageObject.registerObj.next_button().should('be.disabled');
        PageObject.registerObj.date_of_birth_text_field().type("12/12/2020");
        const expectedMsg=" You are not eligible to enroll at this time due to the age requirement. Please contact Participant Services for more information at 888.333.6315, Option 1. ";
        PageObject.registerObj.err_msg_for_dob().should('have.text',expectedMsg);
    });
    it('EN-REG002:Verify Login Information window appears after completing Personal Information window', () => {
        PageObject.registerObj.marital_status_combo_box().select('1: M');
        PageObject.registerObj.spouse_name_text_field().clear().type("Kristen");
        PageObject.registerObj.annual_compensation_text_field().clear().type("50000");
        PageObject.registerObj.address1_text_field().clear().type("Dhaka");
        PageObject.registerObj.city_text_field().clear().type("Khilkhet");
        PageObject.registerObj.zip_text_field().clear().type("12345");
        PageObject.registerObj.state_option_combo_box().select("Georgia");
        PageObject.registerObj.next_button().click();
        PageObject.registerObj.login_information_title_text().should('have.text','Login Information');
    });
    it('EN-REG003:Verify validation error for Login Information window', () => {
        PageObject.registerObj.next_button().click();
        PageObject.registerObj.username_text_field().clear().type("Test12345");
        PageObject.registerObj.choose_password_text_field().clear().type("Test12345");
        PageObject.registerObj.warning_msg_for_same_username_password().should('have.text',"User Name and password should not match");
        PageObject.registerObj.primary_email_text_field().clear();
        PageObject.registerObj.secondary_email_text_field().clear();
        PageObject.registerObj.cell_number_text_field().click();
        PageObject.registerObj.phone_number_text_field().click();
        PageObject.loginObj.next_button().should('be.disabled');
    });
    it('EN-REG004:Verify Security Settings window appears after completing Login Information window', () => {
        PageObject.registerObj.next_button().click();
        PageObject.registerObj.username_text_field().type("Test125432");
        PageObject.registerObj.choose_password_text_field().type("Te$t1234");
        PageObject.registerObj.confirm_password_text_field().type("Te$t1234");
        PageObject.registerObj.cell_number_text_field().type("1234567890");
        PageObject.loginObj.next_button().click();
        PageObject.registerObj.security_headline_text().should('have.text',"Please select and additional security method for logging in.");
    });
    it('EN-REG005:Verify validation error for Security Settings window', () => {
        PageObject.registerObj.next_button().click();
        PageObject.registerObj.username_text_field().clear().type("Test125432");
        PageObject.registerObj.choose_password_text_field().clear().type("Te$t1234");
        PageObject.registerObj.confirm_password_text_field().clear().type("Te$t1234");
        PageObject.registerObj.cell_number_text_field().clear().type("1234567890");
        PageObject.loginObj.next_button().click();
        PageObject.registerObj.email_security_method_radio_button().click();
        PageObject.registerObj.send_code_now_button().click();
        PageObject.registerObj.verification_code_field().type("1111");
        PageObject.registerObj.verify_button().click();
        // PageObject.registerObj.err_msg_verification_code().should('be.visible');
        cy.xpath("//div[@class='alert alert-danger mt5 ng-star-inserted'] | //p[contains(text(),'We are unable to access your account due to an inv')]")
          .should('be.visible')
          .then(($msg) => {
            const errorMsg = $msg.text().trim(); // Get the actual text and trim spaces

            if (errorMsg === "Verification Code is invalid") {
                cy.log("Test is completed");
            } else if (errorMsg === "We are unable to access your account due to an invalid verification code. Please contact Participant Services at 888.333.6315, option 1.") {
                cy.Unlock_LOCK_Status(); // This will now be executed correctly
                cy.log("Test is completed");
            } else {
                cy.log("Unknown error message: " + errorMsg);
            }
        });

    
    });
    
});