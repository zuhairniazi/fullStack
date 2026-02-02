import { test, expect } from '@playwright/test'
import { DragAndDropPage } from '@pages/DragAndDrop.page'

test('', async ({ page }) => {
  const dragAndDropPage = new DragAndDropPage(page)
  await dragAndDropPage.open()

  await expect(await dragAndDropPage.headerA.innerText()).toBe('A')
  await expect(await dragAndDropPage.headerB.innerText()).toBe('B')

  await dragAndDropPage.columnA.dragTo(dragAndDropPage.columnB)
  await expect(await dragAndDropPage.headerA.innerText()).toBe('B')
  await expect(await dragAndDropPage.headerB.innerText()).toBe('A')
})