class LoginLocator{

    plan_password_text_field(){
        return cy.xpath("//label[normalize-space()='Plan Password *']");
    }
    next_button(){
        return cy.xpath("//button[normalize-space()='Next']");
    }
    cancel_button(){
        return cy.xpath("//button[normalize-space()='Cancel']");
    }
    error_msg_incorrect_password_text(){
        return cy.xpath("//div[@class='alert alert-danger']");
    }
    ssn_text_field(){
        return cy.xpath("//label[@for='ssn']");
    }
    click_to_register_button(){
        return cy.xpath("//button[normalize-space()='Click To Register']");
    }
    ssn_page_title_text(){
        return cy.xpath("//h5[normalize-space()='Please enter your Social Security Number']");
    }
    congratulation_title_text(){
        return cy.xpath("//h5[normalize-space()='Congratulations']");
    }
    
}
export default LoginLocator