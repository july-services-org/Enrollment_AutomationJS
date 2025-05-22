class RegisterLocator{
    //Personal information locator
    register_title_text(){
        return cy.xpath("//h4[normalize-space()='Register']");
    }
    next_button(){
        return cy.xpath("//button[@type='submit']");
    }
    next_button_pro(){
        return cy.xpath("//button[normalize-space()='Next']");
    }
    first_name_text_field(){
        return cy.xpath("//input[@id='firstName']");
    }
    last_name_text_field(){
        return cy.xpath("//input[@id='lastName']");
    }
    date_of_birth_text_field(){
        return cy.xpath("//*[@name='birthDate1']");
    }
    marital_status_combo_box(){
        return cy.xpath("//select[@name='maritalStatusOption']");
    }
    spouse_name_text_field(){
        return cy.xpath("//input[@id='spouseName']");
    }
    annual_compensation_text_field(){
        return cy.xpath("//input[@id='annCompensation']");
    }
    address1_text_field(){
        return cy.xpath("//input[@id='address1']");
    }
    address2_text_field(){
        return cy.xpath("//input[@id='address2']");
    }
    city_text_field(){
        return cy.xpath("//input[@id='city']");
    }
    state_option_combo_box(){
        return cy.xpath("//select[@name='stateOption']");
    }
    zip_text_field(){
        return cy.xpath("//input[@id='zip']");
    }
    err_msg_for_dob(){
        return cy.xpath("//div[@class='alert alert-danger ng-star-inserted']");
    }
    //Login Information locator
    login_information_title_text(){
        return cy.xpath("//a[normalize-space()='Login Information']");
    }
    username_text_field(){
        return cy.xpath("//input[@id='userName']");
    }
    choose_password_text_field(){
        return cy.xpath("//input[@id='password']");
    }
    confirm_password_text_field(){
        return cy.xpath("//input[@id='confirmPassword']");
    }
    primary_email_text_field(){
        return cy.xpath("//input[@id='primaryEmail']");
    }
    secondary_email_text_field(){
        return cy.xpath("//input[@id='secondaryEmail']");
    }
    cell_number_text_field(){
        return cy.xpath("//input[@id='primaryPhone']");
    }
    phone_number_text_field(){
        return cy.xpath("//input[@id='secondaryPhone']");
    }
    warning_msg_for_same_username_password(){
        return cy.xpath("//div[normalize-space()='User Name and password should not match']");
    }

    //Security page locator
    security_headline_text(){
        return cy.xpath("//strong[contains(text(),'Please select and additional security method for l')]");
    }
    email_security_method_radio_button(){
        return cy.xpath("//span[normalize-space()='Email']");
    }
    send_code_now_button(){
        return cy.xpath("//button[normalize-space()='Send Code Now']");
    }
    verification_code_field(){
        return cy.xpath("//input[@id='verificationCode']");
    }
    verify_button(){
        return cy.xpath("//button[normalize-space()='Verify']");
    }
    err_msg_verification_code(){
        return cy.xpath("//div[@class='alert alert-danger mt5 ng-star-inserted']");
    }


}
export default RegisterLocator