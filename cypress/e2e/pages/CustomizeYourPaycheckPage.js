class CustomizeYourPaycheckLocator{

    gross_annual_salary_annual_input_field(){
        return cy.get(":nth-child(5) > form.ng-untouched > #customizePayCheck > .modal-content > .customizeBox > :nth-child(3) > :nth-child(2) > .browser-default");
    }
    pay_frequency_dropdown(){
        return cy.get(":nth-child(5) > form.ng-valid > #customizePayCheck > .modal-content > .customizeBox > :nth-child(3) > .left-align > .browser-default");
    }
    filing_status_dropdown(){
        return cy.xpath("(//select[@class='browser-default validate ng-pristine ng-valid ng-touched'])[2]");
    }
    state_of_residency_dropdown(){
        return cy.xpath("(//select[@class='browser-default validate ng-pristine ng-valid ng-touched'])[3]");
    }
    of_dependents_input_field(){
        return cy.xpath("//input[@class='center-align f14 validate browser-default ng-pristine ng-valid valid ng-touched']");
    }
    state_tax_rate_input_field(){
        return cy.xpath("//input[@class='browser-default validate center-align f14 ng-valid valid ng-touched ng-dirty']");
    }
    deduction_type_dropdown(){
        return cy.xpath("//select[@class='browser-default ng-pristine ng-valid ng-touched']");
    }
    amount_pay_period_input_field(){
        return cy.xpath("//input[@class='browser-default right-align ng-valid ng-touched ng-dirty']");
    }
    delete_button_of_dependents(){
        return cy.xpath("//button[@name='btnDeleteRow0']");
    }
    add_button_of_dependents(){
        return cy.xpath("//form[@class='ng-touched ng-dirty ng-valid']//button[@type='button'][normalize-space()='Add Deduction']");
    }
    federal_checkbox(){
        return cy.xpath("(//input[@type='checkbox'])[1]");
    }
    medicare_checkbox(){
        return cy.xpath("(//input[@type='checkbox'])[2]");
    }
    state_checkbox(){
        return cy.xpath("(//input[@type='checkbox'])[3]");
    }
    save_calculate_button(){
        return cy.xpath("//form[@class='ng-touched ng-dirty ng-valid']//div[@class='modal-footer']//button[@type='button']");
    }





}
export default CustomizeYourPaycheckLocator