import { type Locator, type Page } from '@playwright/test'
import { BasePage } from './Base.page'

export class DragAndDropCirclesPage extends BasePage {
  readonly redCircle: Locator
  readonly greenCircle: Locator
  readonly blueCircle: Locator
  readonly canContainer: Locator
  readonly colorsInCan: Locator
  
  constructor(page: Page) {
    super(page)
    this.redCircle = this.page.locator('div.red')
    this.greenCircle = this.page.locator('div.green')
    this.blueCircle = this.page.locator('div.blue')
    this.canContainer = this.page.locator('#target')
    this.colorsInCan = this.canContainer.locator('div')
  }

  public async open() {
    await super.open('/drag-and-drop-circles')
  }
}