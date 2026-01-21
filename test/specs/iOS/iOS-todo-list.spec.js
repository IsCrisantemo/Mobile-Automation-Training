describe('Todo List', () => {
    it('Create a Todo list', async () => {
     await $('//*[@name="Create list"]').click();
     await $('//*[@value="List Name"]').addValue("Things to do today");
     await $('~Create').click();

     await expect(await $('~Things to do today')).toBeExisting();
        });
    });