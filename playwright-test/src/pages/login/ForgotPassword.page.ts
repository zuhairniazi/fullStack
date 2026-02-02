import { BasePage } from '@pages/Base.page'
import { Locator, Page } from '@playwright/test'

export class ForgotPasswordPage extends BasePage {
  readonly emailTextbox: Locator
  readonly retrievePasswordButton: Locator
  readonly emailErrorText: Locator
  readonly confirmationAlert: Locator

  constructor(page: Page) {
    super(page)
    this.emailTextbox = page.getByLabel('E-mail')
    this.retrievePasswordButton = page.getByRole('button', { name: 'Retrieve password' })
    this.emailErrorText = page.locator('#email + div')
    this.confirmationAlert = page.locator('#confirmation-alert')
  }

  public async open() {
    await super.open('/forgot-password')
  }

  public async retrieveForgottenPassword(email: string) {
    await this.emailTextbox.fill(email)
    await this.retrievePasswordButton.click()
  } 
}