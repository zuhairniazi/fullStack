import { type Locator, type Page } from '@playwright/test'
import { BasePage } from './Base.page'

export class HomePage extends BasePage{
  readonly webInputsLink: Locator
  readonly testLoginPageLink: Locator
  readonly testRegisterPageLink: Locator
  readonly forgotPasswordFormLink: Locator
  readonly oneTimePasswordLink: Locator
  readonly dynamicTableLink: Locator
  readonly basicAuthenticationLink: Locator
  readonly digestAuthenticationLink: Locator
  readonly myBrowserInformationLink: Locator
  // readonly radioButtonsLink: Locator
  // readonly dragAndDropLink: Locator
  // readonly dragAndDropCirclesLink: Locator
  // readonly formValidationLink: Locator
  // readonly fileUploadLink: Locator
  // readonly fileDownloaderLink: Locator
  // readonly addRemoveElementsLink: Locator
  // readonly secureFileDownloadLink: Locator
  // readonly notificationMessageLink: Locator
  // readonly autoCompleteLink: Locator
  // readonly cypressSpiesStubsAndClocksLink: Locator
  // readonly Link: Locator

  constructor (page: Page) {
    super(page)
    this.webInputsLink = page.locator('a', { hasText: 'Web Inputs' })
    this.testLoginPageLink = page.locator('a', { hasText: 'Login Page' })
    this.testRegisterPageLink = page.locator('a', { hasText: 'Test Register Page' })
    this.forgotPasswordFormLink = page.locator('a', { hasText: 'Forgot Password Form' })
    this.oneTimePasswordLink = page.locator('a', { hasText: 'OTP: One Time Password' })
    this.dynamicTableLink = page.locator('a', { hasText: 'Dynamic Table' })
    this.basicAuthenticationLink = page.locator('a', { hasText: 'Basic Authentication (user and pass: admin)' })
    this.digestAuthenticationLink = page.locator('a', { hasText: 'Digest Authentication (user and pass: admin)' })
    this.myBrowserInformationLink = page.locator('a', { hasText: 'My Browser Information' })
  }

  public async open() {
    await super.open()
  }
}