import { type Locator, type Page } from '@playwright/test'
import { BasePage } from '../Base.page'

export enum PaymentOptions {
  COD = 'cashondeliver',
  CARD = 'card'
}

export interface formData {
  name: string
  number: string
  date: string
  payment: PaymentOptions
}

export class FormValidationPage extends BasePage {
  readonly contactNameTextbox: Locator
  readonly contactNumberTextbox: Locator
  readonly pickUpDate: Locator
  readonly paymentMethodDropdown: Locator
  readonly registerButton: Locator

  constructor(page: Page) {
    super(page)
    this.contactNameTextbox = this.page.getByLabel('Contact Name')
    this.contactNumberTextbox = this.page.getByLabel('Contact Number')
    this.pickUpDate = this.page.locator('[name="pickupdate"]')
    this.paymentMethodDropdown = this.page.getByLabel('Payment Method')
    this.registerButton = this.page.getByRole('button', { name: 'Register' })
  }

  public async open() {
    await super.open('/form-validation')
  }

  public async fillForm(params: formData): Promise<void> {
    await this.contactNameTextbox.fill(params.name)
    await this.contactNumberTextbox.fill(params.number)
    await this.pickUpDate.fill(params.date)
    await this.paymentMethodDropdown.selectOption(params.payment)
    await this.registerButton.click()
  }
}