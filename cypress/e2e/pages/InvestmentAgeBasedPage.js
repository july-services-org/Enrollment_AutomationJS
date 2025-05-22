class InvestmentAgeBasedLocator{

    age_based_investment_election_title(){
        return cy.xpath("//h5[normalize-space()='Age-Based Investment Election']");
    }
    election_percentage_input_field(){
        return cy.xpath("//tbody/tr[3]/td[5]/div[1]/input[1]");
    }
    next_button(){
        return cy.xpath("//button[normalize-space()='Next']");
    }

}
export default InvestmentAgeBasedLocator