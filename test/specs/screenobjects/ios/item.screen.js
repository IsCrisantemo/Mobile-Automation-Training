class ItemScreen {
    get selectList() {
        return $('~Things to do today');
    }

    get createItemBtn() {
        return $('//*[@name="Create item"]');
    }

    get itemNameInput() {
        return $('//*[@value="Title"]');
    }
    
    get dueDateBtn() {
        return $('//XCUIElementTypeTextField[@value="Due"]');
    }

    get dueDateInput() {
        return $('~14');
    }

    get createBtn() {
        return $('~Create');
    }
    
    itemNameField(name) {
        return $(`~${name}`);
    }
    itemDueDateField(dueDate) {
        return $(`~${dueDate}`);
    }

}
    export default new ItemScreen();