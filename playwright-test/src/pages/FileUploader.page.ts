import { type Page, type Locator } from '@playwright/test'
import { BasePage } from './Base.page'
import path from 'path'

export class FileUploader extends BasePage {
  readonly chooseFileButton: Locator
  readonly uploadButton: Locator
  readonly alert: Locator
  
  constructor(page: Page) {
    super(page)
    this.chooseFileButton = this.page.getByTestId('file-input')
    this.uploadButton = this.page.getByTestId('file-submit')
    this.alert = this.page.locator('#uploaded-files > p')
  }

  public async open() {
    await super.open('/upload')
  }

  public async uploadFile(filepath: string) {
    const fullPath = path.join(__dirname, filepath)
    await this.chooseFileButton.setInputFiles(fullPath)
    await this.uploadButton.click()
  }
}