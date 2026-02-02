import { type Locator, type Page } from '@playwright/test'
import { BasePage } from './Base.page'

export class DragAndDropPage extends BasePage {
  readonly columnA: Locator
  readonly columnB: Locator
  readonly headerA: Locator
  readonly headerB: Locator

  constructor(page: Page) {
    super(page)
    this.columnA = this.page.locator('#column-a')
    this.columnB = this.page.locator('#column-b')
    this.headerA = this.columnA.locator('header')
    this.headerB = this.columnB.locator('header')
  }

  public async open() {
    await super.open('/drag-and-drop')
  }
}