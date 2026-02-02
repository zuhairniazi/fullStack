import { type Locator, type Page } from '@playwright/test'
import { BasePage } from './Base.page'

export class RadioButtonPage extends BasePage {
  readonly blueRadioButton: Locator
  readonly redRadioButton: Locator
  readonly yellowRadioButton: Locator
  readonly blackRadioButton: Locator
  readonly greenRadioButton: Locator
  readonly basketballRadioButton: Locator
  readonly footballRadioButton: Locator
  readonly tennisRadioButton: Locator
  
  constructor(page: Page) {
    super(page)
    this.blueRadioButton = this.page.getByLabel('Blue')
    this.redRadioButton = this.page.getByLabel('Red')
    this.yellowRadioButton = this.page.getByLabel('Yellow')
    this.blackRadioButton = this.page.getByLabel('Black')
    this.greenRadioButton = this.page.locator('#green')
    this.basketballRadioButton = this.page.getByLabel('Basketball')
    this.footballRadioButton = this.page.getByLabel('Football')
    this.tennisRadioButton = this.page.getByLabel('Tennis')
  }

  public async open() {
    await super.open('/radio-buttons')
  }
}