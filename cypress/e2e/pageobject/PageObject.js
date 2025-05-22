import LoginLocator from "../pages/LoginPage";
import RegisterLocator from "../pages/RegisterPage";
import AutomaticEnrollmentLocator from "../pages/AutomaticEnrollmentPage";
import EnrollHomeLocator from "../pages/EnrollHomePage";
import FinalElectionsLocator from "../pages/FinalElectionsPage";
import OptOutLocator from "../pages/OptOutPage";
import UpdateInfoLocator from "../pages/UpdatePersonalInformationPage";
import SelectStarterPackageLocator from "../pages/SelectStarterPackagePage";
import SelectContributionRateLocator from "../pages/SelectContributionRatePage";
import BeneficiariesLocator from "../pages/BeneficiariesPage";
import ReviewAndSubmitLocator from "../pages/ReviewAndSubmitPage";
import CustomizeYourPaycheckLocator from "../pages/CustomizeYourPaycheckPage";
import InvestmentHomeLocator from "../pages/InvestmentHomePage";
import InvestmentAgeBasedLocator from "../pages/InvestmentAgeBasedPage";
class PageObject{
    constructor(){
        this.loginObj=new LoginLocator();
        this.registerObj=new RegisterLocator();
        this.automaticenrollmentObj=new AutomaticEnrollmentLocator();
        this.enrollhomeObj=new EnrollHomeLocator();
        this.finalelectionsObj=new FinalElectionsLocator();
        this.optoutObj=new OptOutLocator();
        this.updateinfoObj=new UpdateInfoLocator();
        this.starterpackageObj=new SelectStarterPackageLocator();
        this.selectcontributerateObj=new SelectContributionRateLocator();
        this.beneficiariesObj=new BeneficiariesLocator();
        this.reviewandsubmitObj=new ReviewAndSubmitLocator();
        this.investmenthomeObj=new InvestmentHomeLocator();
        this.investmentagebasedObj=new InvestmentAgeBasedLocator();
        this.customizepaycheckobj=new CustomizeYourPaycheckLocator();
    }
}
export default new PageObject;