describe('Add notes', () => {
    it('Skip tutorial', async () => {
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
    await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('add a note, save changes & verify note', async () => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        //add note title

        //await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav Anime List");

        //add note body
        //await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Naruto\nOne Piece\nAOT");

        //await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]').click();

        //save the changes
        //await driver.back();
        await driver.back();

        //assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nOne Piece\nAOT");
    });
    
    it('Delete note', async () => {
        const deleteButton = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[7]');
        //const deleteButtonConfirmation = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]');
        const deleteButtonConfirmation = await $('//*[@resource-id="android:id/button1"]');
        const sideMenuButton = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
        const trashCanButton = await $('//android.widget.TextView[@text="Trash Can"]');

        await driver.back();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]').click();
        await deleteButton.click();
        //await $('//*[@resource-id="android:id/button1"]').click();
        await deleteButtonConfirmation.click();
        await sideMenuButton.click();
        await trashCanButton.click();
        await driver.pause(3000);
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).toHaveText("Fav Anime List");
        });

});