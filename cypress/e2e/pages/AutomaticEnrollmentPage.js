class AutomaticEnrollmentLocator{

    automatic_enrollment_title_text(){
        return cy.xpath("//h4[normalize-space()='Automatic Enrollment']");
    }
    customize_my_enrollment_button(){
        return cy.xpath("//button[normalize-space()='Customize My Enrollment']");
    }
    accept_default_enrollment_button(){
        return cy.xpath("//button[normalize-space()='Accept Default Enrollment']");
    }
    opt_out_button(){
        return cy.xpath("//button[normalize-space()='Opt Out']");
    }

}
export default AutomaticEnrollmentLocator
