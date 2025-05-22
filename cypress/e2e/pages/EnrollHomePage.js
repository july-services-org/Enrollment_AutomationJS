class EnrollHomeLocator{
    home_page_title(){
        return cy.xpath("//h5[normalize-space()='Enrollment Test 401k']");
    }
    user_login_dropdown_link(){
        return cy.xpath("//a[@class='dropdown-trigger right userLogin']");
    }
    your_profile_link(){
        return cy.xpath("//a[normalize-space()='Your Profile']");
    }
    custom_enroll_select_button(){
        return cy.xpath("//div[@class='card-action']//a[@class='waves-effect waves-light btn btn-primary'][normalize-space()='Select']");
    }
    quick_enroll_select_button(){
        return cy.xpath("//div[@id='iconAnimation2']//a[@class='waves-effect waves-light btn btn-primary'][normalize-space()='Select']");
    }
    opt_out_select_button(){
        return cy.xpath("//div[@id='iconAnimation3']//a[@class='waves-effect waves-light btn btn-primary'][normalize-space()='Select']");
    }
    left_menu_icon_button(){
        return cy.xpath("//i[@class='material-icons']");
    }
    Beneficiaries_menu_option(){
        return cy.xpath("//a[normalize-space()='Beneficiaries']");
    }

}
export default EnrollHomeLocator