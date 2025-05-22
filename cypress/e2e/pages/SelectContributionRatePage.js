class SelectContributionRateLocator{
    select_contribute_rate_title_text(){
        return cy.xpath("//h5[normalize-space()='Select Contribution Rate']");
    }
    election_type(){
        return cy.xpath("//select[@name='electionTypeOption']");
    }
    pretax_contribution_percentage_input_field(){
        return cy.xpath("//input[@name='pretax']");
    }
    roth_contribution_percentage_input_field(){
        return cy.xpath("//input[@name='roth']");
    }
    pretax_contribution_dollar_input_field(){
        return cy.xpath("//input[@name='perPayPeriodPreTaxAmount']");
    }
    roth_contribution_dollar_input_field(){
        return cy.xpath("//input[@name='perPayPeriodRothAmount']");
    }
    after_tax_contribution_percentage_input_field(){
        return cy.xpath("//input[@name='aftertax']");
    }
    after_tax_contribution_dollar_input_field(){
        return cy.xpath("//input[@name='perPayPeriodAfterTaxAmount']");
    }
    percentage_less_than_4_warning_message(){
        return cy.xpath("//span[contains(text(),'Consider contributing at least 4% so you get the f')]");
    }
    basic_limit_cross_warning_message(){
        return cy.xpath("//span[contains(text(),'Your election may exceed the 401(k) annual contrib')]");
    }
    dollar_limit_cross_warning_message(){
        return cy.xpath("//span[contains(text(),'Your plan has a contribution limit of 100%. Reduce')]");
    }
    annual_compensation_input_field(){
        return cy.xpath("//input[@name='totalCompensation']");
    }
    pay_frequency_dropdown(){
        return cy.xpath("//select[@name='payFrequencyOption']")
    }
    paycheck_text_link(){
        return cy.xpath("//div[contains(text(),'Paycheck')]");
    }
    paycheck_title(){
        return cy.xpath("//h5[normalize-space()='Your Paycheck']");
    }
    filing_status_dropdown(){
        return cy.xpath("//select[@name='taxFilingStatusOption']");
    }
    of_dependant_input_field(){
        return cy.xpath("//input[@name='federal-exmptions']");
    }
    estimated_tax_with_401k(){
        return cy.xpath("(//td[@class='pr15'])[8]");
    }
    savings_text_link(){
        return cy.xpath("//div[contains(text(),'Savings')]");
    }
    savings_title(){
        return cy.xpath("//h5[normalize-space()='Savings Summary']");
    }
    projections_text_link(){
        return cy.xpath("//div[contains(text(),'Projections')]");
    }
    projections_title(){
        return cy.xpath("//h5[normalize-space()='Projected Savings']");
    }
    customize_button(){
        return cy.xpath("//a[normalize-space()='Customize']");
    }
    next_button(){
        return cy.xpath("//button[normalize-space()='Next']");
    }
}
export default SelectContributionRateLocator
