import { Locator, Page } from '@playwright/test'
import { BasePage } from './Base.page'

export class NotificationPage extends BasePage {
  readonly clickHereLink: Locator
  readonly alert: Locator
  readonly closeAlertButton: Locator
  
  constructor(page: Page) {
    super(page)
    this.clickHereLink = this.page.getByText('Click here')
    this.alert = this.page.getByRole('alert')
    this.closeAlertButton = this.page.getByRole('button', { 'name': 'Close' })
  }

  public async open() {
    await super.open('/notification-message-rendered')
  }
}
