import { BasePage } from '@pages/Base.page'
import { Locator, Page } from '@playwright/test'

export class SecurePage extends BasePage{
  readonly alert: Locator
  readonly greetingText: Locator
  readonly logoutButton: Locator
  readonly alertContainer: Locator
  readonly closeAlert: Locator

  constructor (page: Page) {
    super(page)
    this.greetingText = page.locator('#username')
    this.logoutButton = page.locator('[href="/logout"]')
    this.alert = page.locator('#flash > b')
    this.alertContainer = page.locator('#flash-message')
    this.closeAlert = page.getByLabel('Close')
  }

  public async logout() {
    await this.logoutButton.click()
  }

}