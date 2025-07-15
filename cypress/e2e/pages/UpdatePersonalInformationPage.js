class UpdateInfoLocator{
    update_page_title_text(){
        return cy.xpath("//h5[normalize-space()='Update Personal Information']");
    }
    first_name_text_field(){
        return cy.xpath("//input[@id='firstName']");
    }
    last_name_text_field(){
        return cy.xpath("//input[@id='lastName']");
    }
    dob_text_field(){
        return cy.xpath("//input[@id='mat-input-0']");
    }
    mobile_phone_text_field(){
        return cy.xpath("//input[@id='mobilePhone']");
    }
    annual_compensation_text_field(){
        return cy.xpath("//input[@id='annCompensation']");
    }
    email_address_text_field(){
        return cy.xpath("//input[@id='emailAddress']");
    }
    confirm_email_address_text_field(){
        return cy.xpath("//input[@id='confirmEmailAddress']");
    }
    review_personal_information_link(){
        return cy.xpath("//h5[normalize-space()='Review Personal Information']");
    }
    update_address_information_link(){
        return cy.xpath("//h5[normalize-space()='Update Address Information']");
    }
    address_1_text_field(){
        return cy.xpath("//input[@id='address1']");
    }
    city_text_field(){
        return cy.xpath("//input[@id='city']");
    }
    zip_text_field(){
        return cy.xpath("//input[@id='zip']");
    }
    save_button(){
        return cy.xpath("//button[@type='submit']");
    }
    success_message(){
        return cy.xpath("//div[@class='alert alert-success center-align ng-star-inserted']");
    }
    dob_error_message(){
        return cy.xpath("//div[@class='alert alert-danger ng-star-inserted']");
    }
}
export default UpdateInfoLocator
