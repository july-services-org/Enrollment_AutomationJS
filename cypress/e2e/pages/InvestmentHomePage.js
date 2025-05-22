class InvestmentHomeLocator{
    investment_title(){
        return cy.xpath("//h5[normalize-space()='Choose Your Investment Preference']");
    }
    age_based_portfolios_text_link(){
        return cy.xpath("//h5[normalize-space()='Age-Based Portfolios']");
    }

}
export default InvestmentHomeLocator