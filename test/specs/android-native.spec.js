describe('Android Native Features Tests', () => {
    it('Access an Activity directly', async () => {
        //access activity
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

        // pause
        await driver.pause(3000);


        // assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with Dialog Boxes', async () => {
        //access activity
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

        //Click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        //accept Alert box
       // await driver.acceptAlert();

        //dismiss Alert box
        // await driver.dismissAlert();

        // click on the ok button
        await $('//*[@resource-id="android:id/button1"]').click();

        // assertion - alert box is no longer visible
        await expect ($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    })

    it('Vertical scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        // scroll to the end: 1 is the ammount of times you want to scroll and 5 is the speed of the scrolling (not stable if elements gets moved)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

        //scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //await $('~Secure Surfaces').click();

        //assertion
        await expect($('~Secure Dialog')).toExist();
    })

    it("Horizontal Scrolling", async () => {
       await driver.startActivity("io.appium.android.apis",".view.Gallery1");

        // Horizontal scrolling
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

       await driver.pause(3000);

    })

    it.only("Exercise scrolling", async () => {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Views")').click();
            await $('~Date Widgets').click();
            await $('~1. Dialog').click();
            //await ($('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')).getText();
            //await expect ($('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')).toExist();
            const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
            const currentDate = await date.getText();
            await $('~change the date').click();
            await driver.pause(3000);
            //await driver.startActivity("io.appium.android.apis",".view.DateWidgets1");
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
            await $('~10 June 2025').click();
            await $('//*[@resource-id="android:id/button1"]').click();
            const updatedDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')
            const newDate = await updatedDate.getText();
            await expect(newDate).not.toEqual(currentDate);

           
        

    })
});