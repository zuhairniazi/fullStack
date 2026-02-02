import { Locator, Page } from '@playwright/test'
import { BasePage } from './Base.page'

export class SecureFileDownloadPage extends BasePage {
  readonly wdioImageLink: Locator
  readonly body: Locator

  constructor(page: Page) {
    super(page)
    this.wdioImageLink = this.page.getByTestId('wdio.png')
    this.body = this.page.locator('body')
  }

  public async open() {
    await super.open('/download-secure')
  }
}