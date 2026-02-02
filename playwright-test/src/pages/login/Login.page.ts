import { BasePage } from '@pages/Base.page'
import { Locator, Page } from '@playwright/test'

export class LoginPage extends BasePage {
  readonly registerLink: Locator
  readonly usernameTextbox: Locator
  readonly passwordTextbox: Locator
  readonly loginButton: Locator
  readonly alert: Locator
  readonly alertContainer: Locator
  readonly closeAlert: Locator

  constructor(page: Page) {
    super(page)
    this.registerLink = page.locator('[href="/register"]')
    this.usernameTextbox = page.getByLabel('Username')
    this.passwordTextbox = page.getByLabel('Password')
    this.loginButton = page.getByRole('button', { name: 'Login' })
    this.alert = page.locator('#flash > b')
    this.alertContainer = page.locator('#flash-message')
    this.closeAlert = page.getByLabel('Close')
  }

  public async open() {
    await super.open('/login')
  }
  
  public async loginUser(username: string, password: string) {
    await this.usernameTextbox.fill(username)
    await this.passwordTextbox.fill(password)
    await this.loginButton.click()
  }

  public async gotoRegister() {
    await this.registerLink.click()
  }
}