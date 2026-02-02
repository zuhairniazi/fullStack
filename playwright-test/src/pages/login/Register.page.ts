import { BasePage } from '@pages/Base.page'
import { Locator, Page } from '@playwright/test'

export class RegisterPage extends BasePage{
  readonly usernameTextbox: Locator
  readonly passwordTextbox: Locator
  readonly confirmPassTextbox: Locator
  readonly registerButton: Locator
  readonly alert: Locator
  readonly alertContainer: Locator
  readonly closeAlert: Locator
  
  constructor(page: Page) {
    super(page)
    this.usernameTextbox = page.getByLabel('Username')
    this.passwordTextbox = page.locator('#password')
    this.confirmPassTextbox = page.locator('#confirmPassword')
    this.registerButton = page.getByRole('button', { name: 'Register' })
    this.alert = page.locator('#flash > b')
    this.alertContainer = page.locator('#flash-message')
    this.closeAlert = page.getByLabel('Close')
  }

  public async open() {
    await super.open('/register')
  }

  public async registerUser(username: string, password: string) {
    await this.usernameTextbox.fill(username)
    await this.passwordTextbox.fill(password)
    await this.confirmPassTextbox.fill(password)
    await this.registerButton.click()
  }

  public async enterMismatchPasswords(username: string, password: string) {
    await this.usernameTextbox.fill(username)
    await this.passwordTextbox.fill(password)
    await this.confirmPassTextbox.fill(username)
    await this.registerButton.click()
  }
}