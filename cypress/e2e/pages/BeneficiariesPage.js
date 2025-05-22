class BeneficiariesLocator{
    Beneficiaries_title_text(){
        return cy.xpath("//h4[normalize-space()='Beneficiaries']");
    }
    full_name_text_field(){
        return cy.xpath("(//div[@class='custom-field']/input)[1]");
    }
    birth_date_text_field(){
        return cy.xpath("//div[@class='mat-form-field-infix']/input");
    }
    percentage_text_field(){
        return cy.xpath("(//div[@class='custom-field']/input)[3]");
    }
    beneficiary_dropdown(){
        return cy.get('.col.m6.s12 select.browser-default');
    }    
    relationship_dropdown(){
        return cy.get(".col.m3.s12 select.browser-default");
    }
    zip_text_field(){
        return cy.xpath("(//div[@class='custom-field']/input)[7]");
    }
    error_msg_at_least_one_beneficiary_primary(){
        return cy.xpath("//p[normalize-space()='You must add at least one Primary Beneficiary.']");
    }
    error_msg_contigent_beneficiary_100(){
        return cy.xpath("//p[normalize-space()='Contingent Beneficiary Percentage must total 100%.']");
    }
    error_msg_primary_beneficiary_100(){
        return cy.xpath("//p[normalize-space()='Primary Beneficiary Percentage must total 100%.']");
    }
    message_for_married_participants(){
        return cy.xpath("//p[@class='mt10 f13 text-center p10 ng-star-inserted']");
    }
    submit_button(){
        return cy.xpath("//button[@type='submit']");
    }
    updated_success_message(){
        return cy.xpath("//div[@class='alert alert-success text-center ng-star-inserted']");
    }
    add_beneficiary_button(){
        return cy.xpath("//i[normalize-space()='add']");
    }
    remove_beneficiary_button(){
        return cy.xpath("//i[normalize-space()='delete']");
    }

}
export default BeneficiariesLocator
