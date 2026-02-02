import { BasePage } from '@pages/Base.page'
import { Locator, Page } from '@playwright/test'

export class OtpLoginPage extends BasePage{
  readonly emailTextbox: Locator
  readonly sendOtpCodeButton: Locator
  readonly emailErrorText: Locator
  readonly emailAlert: Locator
  readonly otpCodeTextbox: Locator
  readonly verifyOtpCodeButton: Locator
  readonly otpErrorText: Locator

  constructor(page: Page) {
    super(page)
    this.emailTextbox = page.getByLabel('Your Email Address')
    this.sendOtpCodeButton = page.getByRole('button', { name: 'Send OTP Code' })
    this.emailErrorText = page.locator('#email + div')
    this.emailAlert = page.locator('#otp-message')
    this.otpCodeTextbox = page.locator('#otp')
    this.verifyOtpCodeButton = page.getByRole('button', { name: 'Verify OTP Code' })
    this.otpErrorText = page.locator('#otp + div')
  }

  public async open() {
    await super.open('/otp-login')
  }

  public async getOtpCode(email: string) {
    await this.emailTextbox.fill(email)
    await this.sendOtpCodeButton.click()
  }

  public async verifyOtpCode(otpCode: string) {
    await this.otpCodeTextbox.fill(otpCode)
    await this.verifyOtpCodeButton.click()
  }
}