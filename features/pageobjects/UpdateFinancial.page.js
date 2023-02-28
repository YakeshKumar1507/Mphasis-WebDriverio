const BasePage = require("./Base.page");

class UpdateFinancial extends BasePage{

    get defaultCalculatorValues() {return $('//input[@id="default-values-modal-title"]')}
    get additionalIncome(){return $('//main[@id="content"]//input[@id="additional-income"]')}
    get retirementDuration(){return $('//input[@id="retirement-duration"]')}
    get postRetirementIncome(){return $$('//input[@name="inflation-inclusion"]')}
    get retirementAnnualIncomePer(){return $('//input[@id="retirement-annual-income"]')}
    get preRetirement(){return $('//input[@id="pre-retirement-roi"]')}
    get postRetirement(){return $('//input[@id="post-retirement-roi"]')}
    get saveButton(){return $('//button[text()="Save changes"]')}


    async getDefaultCalculator(){
        output=await (await this.defaultCalculatorValues).isDisplayed();
        if(!output === true){
            throw "element not displayed";
        }
    }

    async getAdditionalIncome(additionalIncome){
        await (await this.additionalIncome).setValue(additionalIncome);
    }

    async getRetirementDuration(retirementDuration){
        await (await this.retirementDuration).setValue(retirementDuration);
    }

    async getPostRetirementIncome(value){
        const element =this.postRetirementIncome;
        for(let i=0;i<this.postRetirementIncome.length;i++){
            const ele = await(element[i]).getAttribute('value');
            if(ele === value){
                await (element[i]).click();
                break;
            }
        }
    }

    async getRetirementAnnualIncomePer(retirementAnnualIncome){
        await (await this.retirementAnnualIncomePer).setValue(retirementAnnualIncome);
    }

    async getPreRetirement(preRetirement){
        await (await this.preRetirement).setValue(preRetirement);
    }

    async getPostRetirement(postRetirement){
        await (await this.postRetirement).setValue(postRetirement);
    }

    async getsaveButton(){
        await this.saveButton.click();
    }
}

module.exports = new UpdateFinancial();