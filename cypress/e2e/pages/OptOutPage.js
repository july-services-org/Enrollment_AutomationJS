class OptOutLocator{
    opt_out_page_title(){
        return cy.xpath("//h4[normalize-space()='Opt-Out Acknowledgement']");
    }
}
export default OptOutLocator