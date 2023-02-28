const BasePage = require("./Base.page");

class SmartFinancial extends BasePage{

    get currentAge(){return $('//input[@id="current-age"]')};
    get retirementAge(){return $('//input[@id="retirement-age"]')};
    get currentIncome(){return $('//input[@id="current-income"]')};
    get spouseIncome(){return $('//input[@id="spouse-income"]')};
    get totalSavings(){return $('//input[@id="current-total-savings"]')};
    get annualSavings(){return $('//input[@id="current-annual-savings"]')};
    get savingIncreaseRate(){return $('//input[@id="savings-increase-rate"]')};
    get socialBenfits(){return $$('//input[@name="social-security-benefits"]')};
    get calculateButton(){return $('//button[@data-tag-id="submit"]')};
    get maritalStatus(){return $$('//input[@name="marital-status"]')};
    get socialSecurityAmount (){return $('//input[@id="social-security-override"]')}
    get defaultValueLink(){return $('//a[text()="Adjust default values"]')}

    open(){
        super.open('https://www.securian.com/insights-tools/retirement-calculator.html');
    }

    async getCurrentAge(age){
        await (await this.currentAge).setValue(age);
    }

    async getRetirementAge(retirementAge){
        await (await this.retirementAge).setValue(retirementAge);
    }

    async getCurrentIncome(currentIncome){
        await (await this.currentIncome).setValue(currentIncome);
    }

    async getSpouseIncome(spouseIncome){
        await (await this.spouseIncome).setValue(spouseIncome);
    }

    async getTotalSavings(totalSavings){
        await (await this.totalSavings).setValue(totalSavings);
    }

    async getSavingIncreaseRate(savingIncreaseRate){
        await (await this.savingIncreaseRate).setValue(savingIncreaseRate);
    }

    async getAnnualSavings(annualSavings){
        await (await this.annualSavings).setValue(annualSavings);
    }

    async getSocialBenfits(value){
        const element =this.socialBenfits;
        for(let i=0;i<this.socialBenfits.length;i++){
            const ele = await(element[i]).getAttribute('value');
            if(ele === value){
                await (element[i]).click();
                break;
            }
        }
    }

    async getMaritalStatus(value){
        const element =this.maritalStatus;
        for(let i=0;i<this.maritalStatus.length;i++){
            const ele = await(element[i]).getAttribute('value');
            if(ele === value){
                await (element[i]).click();
                break;
            }
        }
    }

    async getSocialSecurityAmount(socialSecurityAmount){
        await (await this.socialSecurityAmount).setValue(socialSecurityAmount);
    }

    async getdefaultValueLink(){
        await this.defaultValueLink.click();
    }

    async getCalculateButton(){
        await this.calculateButton.click();
    }

}
module.exports = new SmartFinancial();