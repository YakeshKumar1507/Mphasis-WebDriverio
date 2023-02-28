const { Given, When, Then } = require('@cucumber/cucumber');
const SmartFinancialPage = require('../pageobjects/SmartFinancial.page');
import formData from '../resources/formdata.json'

Given(/^User launch the Application$/, async ()=> {
   await SmartFinancialPage.open();
});

When(/^User fill all the fields$/, async ()=> {
    await SmartFinancialPage.getCurrentAge(formData.currentAge);
    await SmartFinancialPage.getRetirementAge(formData.retirementAge);
    await SmartFinancialPage.getCurrentIncome(formData.currentIncome);
    await SmartFinancialPage.getSpouseIncome(formData.spouseIncome);
    await SmartFinancialPage.getTotalSavings(formData.totalSavings);
    await SmartFinancialPage.getSavingIncreaseRate(formData.savingIncreaseRate);
    await SmartFinancialPage.getAnnualSavings(formData.annualSavings);
    await SmartFinancialPage.getSocialBenfits(formData.socialBenfitNo);
});

Then(/^User Click on Calculate button$/, async ()=> {
    await SmartFinancialPage.getCalculateButton();
});