describe('Test the user app (Altibbi App)', () => {
    it.only('Log in the  app', async () => { 
        await driver.acceptAlert();
        await $('//XCUIElementTypeOther[@name="country_JO"]').click();
        await $('//XCUIElementTypeOther[@name="btn_congratulationBtnText"]').click();
        await driver.acceptAlert();

        await driver.pause(5000);

        await $('//XCUIElementTypeStaticText[@name="registerBtnText"]').click();
        await driver.pause(7000);

        await $('//XCUIElementTypeTextField').setValue("962798365448");

        const pass = await $('//XCUIElementTypeSecureTextField').click();
        pass.setValue("123123");

        await $('//XCUIElementTypeOther[@name="btn_emailLoginActionBtn"]').click();

        await expect($('//XCUIElementTypeOther[@name="ic_search_reskin searchInAltibbi"]')).toBeDisplayed();

       
    });
    it('Edit PHR Record Information',async () => {
        await $('//XCUIElementTypeOther[@name="ic_new_bottom_bar_side_menu tabbaritem_4"]').click();

        await driver.execute('mobile: scroll', { direction: "down"});

        await $('//XCUIElementTypeOther[@name="ic_report Phr ic_arrowLeftSmall"]').click();

        await $('//XCUIElementTypeStaticText[@name="phr_profile_label_personalInfo"]').click();

        await $('//XCUIElementTypeTextField[@name="height"]').setValue("160");

        await $('//XCUIElementTypeTextField[@name="weight"]').setValue("90");

        await $('//XCUIElementTypeTextField[@name="blood_type"]').click();
        await $('//XCUIElementTypeOther[@name="alert_action_1"]').click();

        await $('//XCUIElementTypeOther[@name="btn_profile_save_btn"]').click();

        await expect($('//XCUIElementTypeStaticText[@name="alertTtile"]')).toBeDisplayed();

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

    