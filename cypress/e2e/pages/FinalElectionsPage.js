class FinalElectionsLocator{
    final_election_page_title(){
        return cy.xpath("//h5[normalize-space()='Final Elections']");
    }
    add_primary_beneficiary_button(){
        return cy.xpath("//span[normalize-space()='Add Primary Beneficiary']");
    }
    add_contingent_beneficiary_button(){
        return cy.xpath("//span[normalize-space()='Add Contingent Beneficiary']");
    }
    full_name_input_field(){
        return cy.xpath("//div[@class='row mb5']/div[1]/div/input");
    }
    dob_input_field(){
        return cy.xpath("//div[@class='row mb5']/div[3]");
    }
    relationship_dd_field(){
        return cy.xpath("//div[@class='row mb5']/div[4]/div/select");
    }
    primary_input_field(){
        return cy.xpath("//div[@class='row mb5']/div[5]/div/input");
    }
    contingent_input_field(){
        return cy.xpath("//div[@class='row mb5']/div[6]/div/input");
    }
    warning_close_button(){
        return cy.xpath("//button[@class='btn btn-warning btn-small btn-xs']");
    }
    at_least_one_primary_beneficiary_warning_message(){
        return cy.xpath("//p[@class='add-beneficiary-text ng-star-inserted']");
    }
    primary_beneficiary_percentage_must_total_100_error_message(){
        return cy.xpath("//p[@class='add-beneficiary-text ng-star-inserted']");
    }
    contingent_beneficiary_percentage_must_total_100_error_message(){
        return cy.xpath("//p[normalize-space()='Contingent Beneficiary Percentage must total 100%.']");
    }
    click_to_download_beneficiary_form(){
        return cy.xpath("//a[normalize-space()='Click to Download Beneficiary Form.']");
    }
    air_yes_radio_button(){
        return cy.get(".w65");
    }
    rollover_instructions_button(){
        return cy.xpath("//button[normalize-space()='Rollover Instructions']");
    }
    rollover_contribution_instructions_title(){
        return cy.xpath("//h5[normalize-space()='Rollover Contribution Instructions']");
    }
    next_button(){
        return cy.xpath("//button[normalize-space()='Next']");
    }



}
export default FinalElectionsLocator
