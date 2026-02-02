import { DragAndDropCirclesPage } from '@pages/DragAndDropCircles.page'
import { expect, test } from '@playwright/test'

test('Drag and Drop Cirles should fill the can in the correct order', async ({ page }) => {
  const dragAndDropCirclesPage = new DragAndDropCirclesPage(page)
  await dragAndDropCirclesPage.open()

  await dragAndDropCirclesPage.blueCircle.scrollIntoViewIfNeeded()
  await dragAndDropCirclesPage.redCircle.dragTo(await dragAndDropCirclesPage.canContainer)
  await dragAndDropCirclesPage.greenCircle.dragTo(await dragAndDropCirclesPage.canContainer)
  await dragAndDropCirclesPage.blueCircle.dragTo(await dragAndDropCirclesPage.canContainer)

  const allColorsInCan = await dragAndDropCirclesPage.colorsInCan
  await expect(await allColorsInCan.count()).toEqual(3)
  await expect(await allColorsInCan.nth(0)).toHaveClass('red')
  await expect(await allColorsInCan.nth(1)).toHaveClass('green')
  await expect(await allColorsInCan.nth(2)).toHaveClass('blue')
})
