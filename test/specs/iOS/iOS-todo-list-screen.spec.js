//const ListScreen = require('../../screenobjects/ios/list.screen');

import ListScreen from '../../screenobjects/ios/list.screen.js';

describe('Todo List', () => {
    it('Create a Todo list', async () => {
     await ListScreen.createListBtn.click();
     await ListScreen.listNameInput.addValue("Things to do today");
     await ListScreen.CreateBtn.click();

     //await expect(await $('~Things to do today')).toBeExisting();
     await expect(await ListScreen.listNameField("Things to do today")).toBeExisting();
        });
 });