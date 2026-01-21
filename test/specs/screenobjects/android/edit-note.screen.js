class EditNoteScreen {
    get TitleBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get MenuBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]');
    }

    get DeleteBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[7]');
    }

    get DeleteConfirmationBtn() {
        return $('//*[@resource-id="android:id/button1"]');
    }

    get SideMenuBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get TrashCanBtn() {
        return $('//android.widget.TextView[@text="Trash Can"]');
    }

    get TrashCanNoteTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    async SaveNote() {
        await driver.back();
    }
}

module.exports = new EditNoteScreen();
