import { FileDownloader } from '@pages/FileDownloader.page'
import { FileUploader } from '@pages/FileUploader.page'
import { test, expect } from '@playwright/test'

test.describe.serial('File Uploader and File Downloader', () => {
  let filename: string

  test('should allow a file upload ', async ({ page }) => {
    const fileUploader = new FileUploader(page)
    await fileUploader.open()
    await expect(fileUploader.chooseFileButton).toBeVisible()
    await fileUploader.uploadFile('../assets/granita.jpeg')
    expect(await fileUploader.alert.innerText()).toContain('granita.jpeg')
    filename = await fileUploader.alert.innerText()
  })

  test('should allow a file download', async ({ page }) => {
    const fileDownloader = new FileDownloader(page)
    await fileDownloader.open()
    await expect(filename).toContain('granita.jpeg')
    const downloadLocator = await fileDownloader.getLocatorByFilename(filename)
    await expect(downloadLocator).toBeVisible()
    await downloadLocator.click()
    await expect(downloadLocator).toBeFocused()
  })
})
