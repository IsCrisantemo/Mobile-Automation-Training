class AddNoteScreen {
    get skipBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get AddNoteTxt() {
        return $('//*[@text="Add note"]');
    }

    get TxtBtn() {
        return $('//*[@text="Text"]');
    }

    get EditingTxt() {
        return $('//*[@text="Editing"]');
    }

    get EditTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get EditNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get EditBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get ViewNoteTxt() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }
}

module.exports = new AddNoteScreen();
