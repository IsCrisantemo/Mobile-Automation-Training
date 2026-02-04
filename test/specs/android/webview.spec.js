const AddNoteScreen = require("../screenobjects/android/add-note.screen");
describe('Web Browser Access', () => {
    it('Skip tutorial', async () => {
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.AddNoteTxt).toBeDisplayed();
        });
   
    it('Access external link and verify content in the browser', async () => {
    // click on the nav icon
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

    // click on the Facebook link
    await $('//*[@text="Like us on Facebook"]').click();


    //get all the context
    await driver.getContexts();

    //switch to webview chrome context
    await driver.switchContext('WEBVIEW_chrome');

    // assert the cover image is displayed
    //const coverImage = await $('.img[data-imgperflogname="profileCoverPhoto"]');
    let imageToVerify = await $('img[alt="ColorNote"]');
    //await coverImage.waitForExist({ timeout: 10000 });
    if (!await imageToVerify.isExisting()) {
    console.log("⚠️ No encontré por alt, buscando la primera imagen disponible...");
    imageToVerify = await $('//img[1]');
    }
    await expect(imageToVerify).toBeDisplayed();

    //switch back to the app
    await driver.switchContext('NATIVE_APP');
    await driver.back();

    // continue with the app stuff..
    await $('//*[@text="Notes"]').click();
    const addNoteText = await $('//*[@text="Add note"]');
    await expect(addNoteText).toBeDisplayed();
    });
});