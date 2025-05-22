class ReviewAndSubmitLocator{
    review_and_submit_title(){
        return cy.xpath("//h5[normalize-space()='Review and Submit']");
    }
    change_election_button(){
        return cy.xpath("//button[@class='waves-effect waves-light btn btn-primary btn-small btn-xs'][normalize-space()='Change Election']")
    }
    submit_button(){
        return cy.xpath("//button[normalize-space()='Submit']");
    }


}
export default ReviewAndSubmitLocator
