import PageObject from "../pageobject/PageObject";
import * as url from '../../support/urls'
const test_data=require("../fixtures/login_data.json");
describe('Login module test script for enrollment', () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit(url.testJulyEnrollment);
    });
    it('EN-LOG001:Verify Validation Error for Plan Password Field', () => {
        PageObject.loginObj.plan_password_text_field().type("12345");
        PageObject.loginObj.next_button().click();
        PageObject.loginObj.error_msg_incorrect_password_text().should("be.visible");
        const expectedErrorMsg = "Oops! Incorrect Password! The plan passcode you entered is incorrect. Please refer to the enrollment guide to obtain the passcode, or contact your employer.";
        PageObject.loginObj.error_msg_incorrect_password_text().invoke('text').then((actualErrorMsg)=>{
            const trimmedActualErrorMsg = actualErrorMsg.trim().replace(/\s+/g, ' ');
            expect(trimmedActualErrorMsg).to.equal(expectedErrorMsg);
        });
        PageObject.loginObj.cancel_button().click();
        PageObject.loginObj.next_button().should('be.disabled');
    });
    it('EN-LOG002:Verify Please enter your Social Security Number page appears after giving valid Password', () => {
        PageObject.loginObj.plan_password_text_field().type(test_data.Valid1.plan_password);
        PageObject.loginObj.next_button().click();
        const expectedMsg="Please enter your Social Security Number";
        PageObject.loginObj.ssn_page_title_text().invoke('text').then((actualMsg)=>{
            expect(actualMsg).to.equal(expectedMsg);
        });
    });
    it('EN-LOG003:User cannot proceed with invalid SSN in Please enter your Social Security Number page', () => {
        PageObject.loginObj.plan_password_text_field().type(test_data.Valid1.plan_password);
        PageObject.loginObj.next_button().click();
        PageObject.loginObj.ssn_text_field().type("abcdefgst");
        PageObject.loginObj.next_button().should('be.disabled');
    });
    it('EN-LOG004:Verify CONGRATULATIONS! page appears after giving valid SSN', () => {
        PageObject.loginObj.plan_password_text_field().type(test_data.Valid1.plan_password);
        PageObject.loginObj.next_button().click();
        PageObject.loginObj.ssn_text_field().type(test_data.Valid1.ssn);
        PageObject.loginObj.next_button().click();
        const successMsg="Congratulations";
        PageObject.loginObj.congratulation_title_text().should('have.text',successMsg);
    });
    it('EN-LOG005:Verify Register page appears after successful login', () => {
        PageObject.loginObj.plan_password_text_field().type(test_data.Valid1.plan_password);
        PageObject.loginObj.next_button().click();
        PageObject.loginObj.ssn_text_field().type(test_data.Valid1.ssn);
        PageObject.loginObj.next_button().click();
        PageObject.loginObj.click_to_register_button().click();
        const expectedMsg="Register";
        PageObject.registerObj.register_title_text().should('have.text',expectedMsg);
    });
    it('EN-LOG006:Verify Automatic Enrollment page appears with registered SSN', () => {
        PageObject.loginObj.plan_password_text_field().type(test_data.Valid1.plan_password);
        PageObject.loginObj.next_button().click();
        PageObject.loginObj.ssn_text_field().type(test_data.Valid1.ssn);
        PageObject.loginObj.next_button().click();
        PageObject.loginObj.click_to_register_button().click();
        PageObject.registerObj.next_button().click();
        PageObject.automaticenrollmentObj.automatic_enrollment_title_text().should('have.text','Automatic Enrollment');
    });

});
