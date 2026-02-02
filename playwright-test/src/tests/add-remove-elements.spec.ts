import { AddRemoveElementPage } from '@pages/AddRemoveElements.page'
import { test, expect } from '@playwright/test'

test.describe('Add/Remove Elements', () => {
  test('should add and remove an equal amount of buttons', async ({ page }) => {
    const addRemoveElementPage = new AddRemoveElementPage(page)
    await addRemoveElementPage.open()

    await addRemoveElementPage.addXButtons(3)
    await expect(await addRemoveElementPage.deleteButtons.count()).toBe(3)

    await addRemoveElementPage.deleteXbuttons(3)
    await expect(await addRemoveElementPage.deleteButtons.count()).toBe(0)
  })
})