const { Given, When, Then } = require('@cucumber/cucumber');
const SmartFinancialPage = require('../pageobjects/SmartFinancial.page');
const UpdateFinancialPage = require('../pageobjects/UpdateFinancial.page');
import formData from '../resources/formdata.json'
import updateDate from '../resources/updatedata.json'


Given(/^User launch the Application$/, async()=> {
    SmartFinancialPage.open();
});

When(/^User fill all require fields$/, async()=> {
    await SmartFinancialPage.getCurrentAge(formData.currentAge);
    await SmartFinancialPage.getRetirementAge(formData.retirementAge);
    await SmartFinancialPage.getCurrentIncome(formData.currentIncome);
    await SmartFinancialPage.getTotalSavings(formData.totalSavings);
    await SmartFinancialPage.getAnnualSavings(formData.annualSavings);
    await SmartFinancialPage.getSavingIncreaseRate(formData.savingIncreaseRate);
    await SmartFinancialPage.getSocialBenfits(formData.socialBenfitNo);
    //await SmartFinancialPage.getMaritalStatus(formData.statusMarried);
    await SmartFinancialPage.getdefaultValueLink();

});

Then(/^User fill all update fields$/, async()=> {
    //await UpdateFinancialPage.getDefaultCalculator();
    browser.pause(5000);
    await UpdateFinancialPage.getAdditionalIncome(updateDate.additionalIncome);
    await UpdateFinancialPage.getRetirementDuration(updateDate.retirementDuration);
    await UpdateFinancialPage.getPostRetirementIncome(updateDate.postRetirementIncome);
    await UpdateFinancialPage.getRetirementAnnualIncomePer(updateDate.retirementAnnualIncomePre);
    await UpdateFinancialPage.getPreRetirement(updateDate.preRetirement);
    await UpdateFinancialPage.getPostRetirement(updateDate.postRetirement);
    await UpdateFinancialPage.getsaveButton();
});

Then(/^User Click on Calculate button$/, async()=> {
    await SmartFinancialPage.getCalculateButton();
});
