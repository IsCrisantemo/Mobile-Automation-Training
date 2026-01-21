//const ListScreen = require('../../screenobjects/ios/list.screen');
//const ItemScreen = require('../../screenobjects/ios/item.screen');

import ListScreen from '../screenobjects/ios/list.screen.js';
import ItemScreen from '../screenobjects/ios/item.screen.js';
describe('Todo List', () => {
    it('Create a Todo list', async () => {
     await ListScreen.createListBtn.click();
     await ListScreen.listNameInput.addValue("Things to do today");
     await ListScreen.createBtn.click();

     await expect (ListScreen.listNameField("Things to do today")).toBeExisting();
    });

    it('Add todo item to the list', async () => {
        await ItemScreen.selectList.click();
        await ItemScreen.createItemBtn.click();
        await ItemScreen.itemNameInput.addValue("Buy Christmas tree");
        await ItemScreen.dueDateBtn.click();
        await ItemScreen.dueDateInput.click();
        await ItemScreen.createBtn.click();
        await expect (ItemScreen.itemNameField("Buy Christmas tree")).toBeExisting();
        await expect (ItemScreen.itemDueDateField("Due Tomorrow")).toBeExisting();
    });
 });