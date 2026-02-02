import { Locator, Page } from '@playwright/test'
import { BasePage } from './Base.page'

export class DynamicTablePage extends BasePage{
  readonly yellowTestValue: Locator
  
  constructor (page: Page) {
    super(page)
    this.yellowTestValue = page.locator('#chrome-cpu')
  }

  public async open() {
    await super.open('/dynamic-table')
  }
}