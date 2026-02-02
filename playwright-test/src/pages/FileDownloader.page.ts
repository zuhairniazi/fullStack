import { BasePage } from './Base.page'
import { type Locator, type Page } from '@playwright/test'

export class FileDownloader extends BasePage {
  constructor (page: Page) {
    super(page)
  }

  public async open() {
    await super.open('/download')
  }

  public getLocatorByFilename (filename: string): Locator {
    return this.page.getByTestId(filename)
  }

}