// import PageObject from "../pageobject/PageObject";
// import * as url from '../../support/urls'
// describe('Custom Enrollment module test script for enrollment', () => {
//     beforeEach(() => {
//         cy.clearLocalStorage();
//         cy.login_by_plan_password_and_ssn("01322710","954682312");
//     });
//     it('EN-CUS001:Verify Pretax/Roth Contribution are changeable depending on the Election Type', () => {
//         PageObject.registerObj.next_button_pro().click();
//         PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
//         PageObject.enrollhomeObj.custom_enroll_select_button().click();
//         PageObject.selectcontributerateObj.election_type().select("0: percentage");
//         PageObject.selectcontributerateObj.pretax_contribution_percentage_input_field().should('be.enabled');
//         PageObject.selectcontributerateObj.roth_contribution_percentage_input_field().should('be.enabled');
//         PageObject.selectcontributerateObj.after_tax_contribution_percentage_input_field().should('be.enabled');
//         PageObject.selectcontributerateObj.pretax_contribution_dollar_input_field().should('be.disabled');
//         PageObject.selectcontributerateObj.roth_contribution_dollar_input_field().should('be.disabled');
//         PageObject.selectcontributerateObj.after_tax_contribution_dollar_input_field().should('be.disabled');
//         cy.wait(2000);
//         PageObject.selectcontributerateObj.election_type().select("1: dollaramount");
//         PageObject.selectcontributerateObj.pretax_contribution_dollar_input_field().should('be.enabled');
//         PageObject.selectcontributerateObj.roth_contribution_dollar_input_field().should('be.enabled');
//         PageObject.selectcontributerateObj.after_tax_contribution_dollar_input_field().should('be.enabled');
//         PageObject.selectcontributerateObj.pretax_contribution_percentage_input_field().should('be.disabled');
//         PageObject.selectcontributerateObj.roth_contribution_percentage_input_field().should('be.disabled');
//         PageObject.selectcontributerateObj.after_tax_contribution_percentage_input_field().should('be.disabled');
//     });
//     it.only('EN-CUS002:Verify warning message & limitation for "Pretax/Roth/Aftertax Contribution"', () => {
//         PageObject.registerObj.next_button_pro().click();
//         PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
//         PageObject.enrollhomeObj.custom_enroll_select_button().click();
//         PageObject.selectcontributerateObj.election_type().select("0: percentage");
//         PageObject.selectcontributerateObj.pretax_contribution_percentage_input_field().clear().type("1");
//         PageObject.selectcontributerateObj.roth_contribution_percentage_input_field().clear().type("1");
//         PageObject.selectcontributerateObj.after_tax_contribution_percentage_input_field().clear().type("1").blur();
//         PageObject.selectcontributerateObj.percentage_less_than_4_warning_message().should('have.text','Consider contributing at least 4% so you get the full matching contribution.');
//         cy.wait(2000);
//         PageObject.selectcontributerateObj.pretax_contribution_percentage_input_field().clear().type("90");
//         PageObject.selectcontributerateObj.roth_contribution_percentage_input_field().clear().type("19");
//         PageObject.selectcontributerateObj.after_tax_contribution_percentage_input_field().clear().type("11").blur();
//         PageObject.selectcontributerateObj.basic_limit_cross_warning_message().should('have.text',"Your election may exceed the 401(k) annual contribution limit ($22,500).");
//         cy.wait(1000);
//         PageObject.selectcontributerateObj.election_type().select("1: dollaramount");
//         PageObject.selectcontributerateObj.pretax_contribution_dollar_input_field().clear().type("3210");
//         PageObject.selectcontributerateObj.roth_contribution_dollar_input_field().clear().type("4130");
//         PageObject.selectcontributerateObj.after_tax_contribution_dollar_input_field().clear().type("504").blur();
//         cy.wait(1000);
//         PageObject.selectcontributerateObj.dollar_limit_cross_warning_message().should("have.text","Your plan has a contribution limit of 100%. Reduce your contribution to proceed.");
//     });
//     it('EN-CUS003:Verify changing of Pretax/Roth/Aftertax Contribution changes the value in Your Paycheck,Savings Summary & Projected Savings sections', () => {
//         PageObject.registerObj.next_button_pro().click();
//         PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
//         PageObject.enrollhomeObj.custom_enroll_select_button().click();
//         PageObject.selectcontributerateObj.election_type().select("0: percentage");
//         PageObject.selectcontributerateObj.pretax_contribution_percentage_input_field().clear().type("3");
//         PageObject.selectcontributerateObj.roth_contribution_percentage_input_field().clear().type("4");
//         PageObject.selectcontributerateObj.after_tax_contribution_percentage_input_field().clear().type("5").blur();
//         PageObject.selectcontributerateObj.paycheck_text_link().click();
//         PageObject.selectcontributerateObj.paycheck_title().should('have.text'," Your Paycheck ");
//         PageObject.selectcontributerateObj.savings_text_link().click();
//         PageObject.selectcontributerateObj.savings_title().should("have.text"," Savings Summary ");
//         PageObject.selectcontributerateObj.projections_text_link().click();
//         PageObject.selectcontributerateObj.projections_title().should("have.text"," Projected Savings ");
//     });
//     it('EN-CUS004:Verify Pretax/Roth/aftertax Contribution limit depends on Annual Compensation & Your Pay Frequency', () => {
//         PageObject.registerObj.next_button_pro().click();
//         PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
//         PageObject.enrollhomeObj.custom_enroll_select_button().click();
//         cy.wait(2000);
//         PageObject.selectcontributerateObj.after_tax_contribution_percentage_input_field().type("4");
//         PageObject.selectcontributerateObj.annual_compensation_input_field().clear().type("65000");
//         PageObject.selectcontributerateObj.pay_frequency_dropdown().select("3: 4");
//         cy.scrollTo('top');
//         cy.wait(1000);
//         PageObject.selectcontributerateObj.paycheck_text_link().click();
//         cy.wait(1000);
//         PageObject.selectcontributerateObj.projections_text_link().click();
//         cy.wait(1000);
//         PageObject.selectcontributerateObj.savings_text_link().click();
//     });
//     it('EN-CUS005:Verify changing the Filing Status & # of Dependents changes the Estimated Taxes ', () => {
//         PageObject.registerObj.next_button_pro().click();
//         PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
//         PageObject.enrollhomeObj.custom_enroll_select_button().click();
//         cy.wait(1000);
//         PageObject.selectcontributerateObj.after_tax_contribution_percentage_input_field().type("4");
//         PageObject.selectcontributerateObj.annual_compensation_input_field().clear().type("65000");
//         PageObject.selectcontributerateObj.pay_frequency_dropdown().select("4: 7");
//         cy.scrollTo('top');
//         cy.wait(1000);
//         PageObject.selectcontributerateObj.paycheck_text_link().click();
//         PageObject.selectcontributerateObj.filing_status_dropdown().select("1: 2");
//         PageObject.selectcontributerateObj.of_dependant_input_field().clear().type("4").blur();
//         PageObject.selectcontributerateObj.estimated_tax_with_401k().should('be.visible');
//     });
//     it('EN-CUS006:Verify editing information in "Customize Your Paycheck" window', () => {
//         PageObject.registerObj.next_button_pro().click();
//         PageObject.automaticenrollmentObj.customize_my_enrollment_button().click();
//         PageObject.enrollhomeObj.custom_enroll_select_button().click();
//         cy.wait(1000);
//         PageObject.selectcontributerateObj.after_tax_contribution_percentage_input_field().clear().type("4").blur();
//         cy.scrollTo('top');
//         cy.wait(1000);
//         PageObject.selectcontributerateObj.paycheck_text_link().click();
//         PageObject.selectcontributerateObj.customize_button().click();
//         PageObject.customizepaycheckobj.gross_annual_salary_annual_input_field().clear().type("60000").blur();
//     });
    
// });