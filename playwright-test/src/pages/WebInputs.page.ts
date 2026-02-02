import { type Locator, type Page } from '@playwright/test'
import { BasePage } from './Base.page'

export interface enterDataAndDisplayInputsParams {
  number: number
  text: string
  password: string
  date: string
}

export class WebInputsPage extends BasePage{
  readonly displayInputsButton: Locator
  readonly clearInputsButton: Locator
  readonly numberTextbox: Locator
  readonly textTextbox: Locator
  readonly passwordTextbox: Locator
  readonly dateTextbox: Locator
  readonly numberOutputTextbox: Locator
  readonly textOutputTextbox: Locator
  readonly passwordOutputTextbox: Locator
  readonly dateOutputTextbox: Locator
  
  constructor(page: Page) {
    super(page)
    this.displayInputsButton = page.locator('button', { hasText: 'Display Inputs' })
    this.clearInputsButton = page.locator('button', { hasText: 'Clear Inputs' })
    this.numberTextbox = page.locator('#input-number')
    this.textTextbox = page.locator('#input-text')
    this.passwordTextbox = page.locator('#input-password')
    this.dateTextbox = page.locator('#input-date')
    this.numberOutputTextbox = page.locator('#output-number')
    this.textOutputTextbox = page.locator('#output-text')
    this.passwordOutputTextbox = page.locator('#output-password')
    this.dateOutputTextbox = page.locator('#output-date')
  }

  public async open() {
    await super.open('/inputs')
  }

  public async enterDataAndDisplayInputs(params: enterDataAndDisplayInputsParams) {
    const { number, text, password, date } = params

    await this.clearInputsButton.click()
    await this.numberTextbox.fill(number.toString())
    await this.textTextbox.fill(text)
    await this.passwordTextbox.fill(password)
    await this.dateTextbox.fill(date)
    await this.displayInputsButton.click()
  }
}