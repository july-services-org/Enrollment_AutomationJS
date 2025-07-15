class SelectStarterPackageLocator{

    select_starter_package_title_text(){
        return cy.xpath("//h5[normalize-space()='Select Starter Package']")
    }
    good_title_text(){
        return cy.xpath("//h4[normalize-space()='Good']");
    }
    good_select_button(){
        return cy.xpath("//button[@class='positionRelative btn btn-green']");
    }
    better_title_text(){
        return cy.xpath("//h4[normalize-space()='Better']");
    }
    best_title_text(){
        return cy.xpath("//h4[normalize-space()='Best']");
    }
    fund_fact_sheet(){
        return cy.xpath("//a[normalize-space()='Dimensional 2035 Target Dt Rtr Inc Instl']");
    }
    change_to_roth_contribution_type_text(){
        return cy.xpath("//a[normalize-space()='Change to Roth Contribution Type']");
    }
    change_to_pretax_contribution_type_text(){
        return cy.xpath("//a[normalize-space()='Change to Pre-Tax Contribution Type']");
    }
    change_automatic_increase_text(){
        return cy.xpath("//a[normalize-space()='Change Automatic Increase']");
    }
    customize_enrollment_text(){
        return cy.xpath("//a[normalize-space()='Customize Enrollment']");
    }
    update_auto_increase_pop_up_title(){
        return cy.xpath("//h1[@id='mat-dialog-title-0']");
    }
    increase_rate_input_field(){
        return cy.xpath("//input[@id='increaseRate']");
    }
    update_button(){
        return cy.xpath("//span[normalize-space()='Update']");
    }
    cancel_button(){
        return cy.xpath("//span[normalize-space()='Cancel']");
    }
    error_message(){
        return cy.xpath("//div[@class='text-left text-danger mb10 ng-star-inserted']");
    }
}
export default SelectStarterPackageLocator