import PageObject from "../pageobject/PageObject";
import * as url from '../../support/urls'
describe('Beneficiaries module test script for enrollment', () => {

   beforeEach(() => {
       cy.clearLocalStorage();
       cy.login_by_plan_password_and_ssn("01322710","954682312");
   });
   it('MENU-BEN001:Verify Menu Icon opens the sub menu option', () => {
    PageObject.registerObj.next_button_pro().click();
    PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
    PageObject.enrollhomeObj.left_menu_icon_button().click();
    PageObject.enrollhomeObj.Beneficiaries_menu_option().should('be.visible').and('have.text',"Beneficiaries");
   });
   it('MENU-BEN002:Verify Beneficiaries option opens the Beneficiaries page', () => {
    PageObject.registerObj.next_button_pro().click();
    PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
    PageObject.enrollhomeObj.left_menu_icon_button().click();
    PageObject.enrollhomeObj.Beneficiaries_menu_option().click();
    PageObject.beneficiariesObj.Beneficiaries_title_text().should("have.text","Beneficiaries");
   });
   it('MENU-BEN003:Verify validation error for blank Beneficiary & not selecting Primary beneficiary', () => {
    PageObject.registerObj.next_button_pro().click();
    PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
    PageObject.enrollhomeObj.left_menu_icon_button().click();
    PageObject.enrollhomeObj.Beneficiaries_menu_option().click();
    PageObject.beneficiariesObj.full_name_text_field().clear();
    PageObject.beneficiariesObj.birth_date_text_field().clear();
    PageObject.beneficiariesObj.percentage_text_field().clear();
    PageObject.beneficiariesObj.zip_text_field().clear();
    PageObject.beneficiariesObj.beneficiary_dropdown().select("1: 2");
    PageObject.beneficiariesObj.error_msg_at_least_one_beneficiary_primary().should('have.text'," You must add at least one Primary Beneficiary. ");
    PageObject.beneficiariesObj.submit_button().should('be.disabled');
   });
   it('MENU-BEN004:Verify validation error for not meeting % limit for Primary & Contingent type beneficiary', () => {
    PageObject.registerObj.next_button_pro().click();
    PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
    PageObject.enrollhomeObj.left_menu_icon_button().click();
    PageObject.enrollhomeObj.Beneficiaries_menu_option().click();
    PageObject.beneficiariesObj.beneficiary_dropdown().select("0: 1");
    PageObject.beneficiariesObj.percentage_text_field().clear().type("110");
    PageObject.beneficiariesObj.zip_text_field().clear();
    PageObject.beneficiariesObj.error_msg_primary_beneficiary_100().should('have.text'," Primary Beneficiary Percentage must total 100%. ");
    PageObject.beneficiariesObj.beneficiary_dropdown().select("1: 2");
    PageObject.beneficiariesObj.percentage_text_field().clear().type("50");
    PageObject.beneficiariesObj.zip_text_field().click();
    PageObject.beneficiariesObj.error_msg_contigent_beneficiary_100().should('have.text'," Contingent Beneficiary Percentage must total 100%. ");
    PageObject.beneficiariesObj.submit_button().should('be.disabled');
   });
   it('MENU-BEN005:Verify successfully Beneficiary Add for valid data', () => {
    PageObject.registerObj.next_button_pro().click();
    PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
    PageObject.enrollhomeObj.left_menu_icon_button().click();
    PageObject.enrollhomeObj.Beneficiaries_menu_option().click();
    PageObject.beneficiariesObj.full_name_text_field().clear().type("Al-Amin");
    PageObject.beneficiariesObj.birth_date_text_field().clear().type("1/1/2001");
    PageObject.beneficiariesObj.beneficiary_dropdown().select("0: 1");
    PageObject.beneficiariesObj.percentage_text_field().clear().type("100");
    PageObject.beneficiariesObj.relationship_dropdown().select("3: Trust");
    PageObject.beneficiariesObj.message_for_married_participants().should("be.visible");
    PageObject.beneficiariesObj.submit_button().click();
    PageObject.beneficiariesObj.updated_success_message().should("have.text","Beneficiaries updated successfully!")
   });
   it('MENU-BEN006:Verify Add Beneficiary and Remove Beneficiary button', () => {
    PageObject.registerObj.next_button_pro().click();
    PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
    PageObject.enrollhomeObj.left_menu_icon_button().click();
    PageObject.enrollhomeObj.Beneficiaries_menu_option().click();
    PageObject.beneficiariesObj.full_name_text_field().clear().type("Tania");
    PageObject.beneficiariesObj.birth_date_text_field().clear().type("1/1/2001");
    PageObject.beneficiariesObj.beneficiary_dropdown().select("0: 1");
    PageObject.beneficiariesObj.percentage_text_field().clear().type("100");
    PageObject.beneficiariesObj.relationship_dropdown().select("0: Spouse");
    PageObject.beneficiariesObj.add_beneficiary_button().should('be.visible').click();
    cy.scrollTo('bottom')
    PageObject.beneficiariesObj.remove_beneficiary_button().should('be.visible').eq(1).click();
   });
   

});