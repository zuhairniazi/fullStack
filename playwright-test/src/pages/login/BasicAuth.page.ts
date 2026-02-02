import { BasePage } from '@pages/Base.page'
import { type Locator, type Page } from '@playwright/test'

export class BasicAuthPage extends BasePage {
  readonly alert: Locator

  constructor (page: Page) {
    super(page)
    this.alert = page.locator('.alert > b')
  }

  public async open() {
    await this.page.goto('/basic-auth', { waitUntil: 'commit' })
  }
}