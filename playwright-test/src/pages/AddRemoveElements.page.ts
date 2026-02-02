import { Page, Locator } from '@playwright/test'
import { BasePage } from './Base.page'

export class AddRemoveElementPage extends BasePage {
  readonly addElementButton: Locator
  readonly deleteButtonContainer: Locator
  readonly deleteButtons: Locator

  constructor(page: Page) {
    super(page)
    this.addElementButton = this.page.getByRole('button', { name: 'Add Element' })
    this.deleteButtonContainer = this.page.locator('#elements')
    this.deleteButtons = this.deleteButtonContainer.locator('button')
  }

  public async open () {
    await super.open('/add-remove-elements')
  }

  public async addXButtons(num: number): Promise<void> {
    const count = Array.from({ length: num })

    for (const [i] of count.entries()) {
      await this.addElementButton.click()
    }
  }

  public async deleteXbuttons(num: number): Promise<void> {
    const count = Array.from({ length: num })

    for (const [i] of count.entries()) {
      await this.deleteButtons.first().click()
    }
  }
}