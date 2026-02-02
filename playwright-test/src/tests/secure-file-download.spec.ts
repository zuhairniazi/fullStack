import { SecureFileDownloadPage } from '@pages/SecureFileDownload.page'
import { test, expect } from '@playwright/test'

test.describe('Secure File Download', () => {
  test('should login and download a file', async ({ page }) => {
    const secureFileDownloadPage = new SecureFileDownloadPage(page)

    await secureFileDownloadPage.setAuthHeader('admin', 'admin')
    await secureFileDownloadPage.open()

    await expect(secureFileDownloadPage.wdioImageLink).toBeVisible()
  })

  test('should not allow login when password is wrong', async ({ page }) => {
    const secureFileDownloadPage = new SecureFileDownloadPage(page)

    await secureFileDownloadPage.setAuthHeader('admin', 'admin123')
    await secureFileDownloadPage.open()

    await expect(secureFileDownloadPage.body).toHaveText('Not authorized')
  })
})