const AddNoteScreen = require("../screenobjects/android/add-note.screen");
const EditNoteScreen = require("../screenobjects/android/edit-note.screen.js");

describe('Add notes', () => {
    it('Skip tutorial', async () => {
    await AddNoteScreen.skipBtn.click();
    await expect(AddNoteScreen.AddNoteTxt).toBeDisplayed();
    });

    it('add a note, save changes & verify note', async () => {
        await AddNoteScreen.AddNoteTxt.click();
        await AddNoteScreen.TxtBtn.click();


        await expect(AddNoteScreen.EditingTxt).toBeDisplayed();

        //add note title
        await AddNoteScreen.EditTitle.addValue("Fav Anime List");

        //add note body
        await AddNoteScreen.EditNote.addValue("Naruto\nOne Piece\nAOT");

        //save the changes
        await EditNoteScreen.SaveNote();
        await EditNoteScreen.SaveNote();

        //assertion
        await expect(AddNoteScreen.EditBtn).toBeDisplayed();
        await expect(AddNoteScreen.ViewNoteTxt).toHaveText("Naruto\nOne Piece\nAOT");
    });
    
    it('Delete note', async () => {
        await EditNoteScreen.SaveNote();
        await EditNoteScreen.TitleBtn.click();
        await EditNoteScreen.MenuBtn.click();
        await EditNoteScreen.DeleteBtn.click();
        await EditNoteScreen.DeleteConfirmationBtn.click();
        await EditNoteScreen.SideMenuBtn.click();
        await EditNoteScreen.TrashCanBtn.click();
        await driver.pause(3000);
        await expect(EditNoteScreen.TrashCanNoteTitle).toHaveText("Fav Anime List");
        });

});