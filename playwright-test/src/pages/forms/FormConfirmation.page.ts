import { type Locator, type Page } from '@playwright/test'
import { BasePage } from '../Base.page'

export class FormConfirmationPage extends BasePage {
  readonly alert: Locator

  constructor(page: Page) {
    super(page)
    this.alert = this.page.locator('.alert > p')
  }

  public async open() {
    await super.open('/form-confirmation')
  }

}