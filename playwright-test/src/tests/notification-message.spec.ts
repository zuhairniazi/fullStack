import { NotificationPage } from '@pages/notification.page'
import { test, expect } from '@playwright/test'

test.describe('Notification Messages', () => {
  test('should display one of two messages', async ({ page }) => {
    const notificationPage = new NotificationPage(page)

    await notificationPage.open()

    await notificationPage.clickHereLink.click()

    const validResponses = ['Action unsuccessful, please try again', 'Action successful']
    await expect(validResponses).toContain(await notificationPage.alert.innerText())
  })
})