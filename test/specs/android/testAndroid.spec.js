const axios = require('axios');

describe('Test the user app (Altibbi App)', () => {
    it('Login to the  app', async () => { 
        await $('//android.view.ViewGroup[@content-desc="JO"]').click();

        await driver.pause(5000);

        await $('//android.widget.TextView[@content-desc="registerBtnText"]').click();

        await $('//*[@resource-id="email_login_user_txt"]').setValue("962798365448");
        await $('//*[@resource-id="email_login_pass_txt"]').setValue("123123");

        await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]').click();

        await expect($('//android.widget.TextView[@content-desc="helpingQuestion"]')).toBeDisplayed();

    });
    it('Edit PHR Record Information',async () => {
        await $('//*[@resource-id="tabbaritem_4"]').click();
        await driver.pause(3000);

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        await $('//android.view.ViewGroup[@content-desc="Phr"]').click();

        await $('//*[@resource-id="phr_profile_personalInfo"]').click();

        await $('//*[@resource-id="height"]').setValue("160");
        await $('//*[@resource-id="weight"]').setValue("90");
        await $('//*[@resource-id="blood_type"]').click();
        await $('//*[@resource-id="alert_action_1"]').click();
        
        await $('//*[@resource-id="btn_profile_save_btn"]').click();

        await expect($('//android.widget.TextView[@content-desc="alertTtile"]')).toBeDisplayed();

    });
    it('Validate PHR Data', async() => {
        try {
            const response = await axios.get('https://api-stg.altibb.com/active/v1/phrs/29313626',{
                headers:{
                    'Authorization': 'Bearer oYKqtcwsnenbEO_vmsdMkxF1KeRc71WR'
                }
            });
            const data = response.data;
            const {Height, Weight, BloodType} = data;
        
            const expectHeight  = 160;
            const expectWeight  = 90;
            const expectBloodType  = "B+";
        
            if(Height  === expectHeight && Weight ===  expectWeight && BloodType === expectBloodType){
                console.log('validation passed');
            }else{
                console.error('validation failed');
            }
        
        } catch (error) {
            console.error("Error Validation: ", error);
        }
    });
});