import { type Locator, type Page } from '@playwright/test'
import { BasePage } from './Base.page'

interface Header {
  locator: Locator
  position: number
}

export class DynamicPaginationTablePage extends BasePage {
  readonly showEntriesDropdown: Locator
  readonly searchTextbox: Locator
  readonly selectedPage: Locator
  readonly previousButton: Locator
  readonly nextButton: Locator
  readonly displayedRecords: Locator
  readonly tableHeaders: Locator
  readonly tableData: Locator
  
  constructor (page: Page) {
    super(page)
    this.showEntriesDropdown = this.page.locator('.form-select')
    this.searchTextbox = this.page.getByLabel('Search:')
    this.selectedPage = this.page.locator('ul.pagination > li.active')
    this.previousButton = this.page.locator('#example_previous')
    this.nextButton = this.page.locator('#example_next')
    this.displayedRecords = this.page.getByRole('status')
    this.tableHeaders = this.page.locator('th')
    this.tableData = this.page.locator('td')
  }

  public gotoPageNumber(num: number): Locator {
    return this.page.locator('a', { hasText: num.toString() })
  }
  
  public async open() {
    await super.open('/dynamic-pagination-table')
  }

  public entryCountPhrase(start: number, end: number): string {
    return `Showing ${start} to ${end} of 10 entries`
  }

  public async getSearchResultCount(): Promise<string> {
    const stringArray = await this.displayedRecords.innerText().then(str => { return str.split(' ') })

    return stringArray[5]
  }

  public async getTableHeaderAndPosition(headerName: string): Promise<Header> {
    if (await this.tableHeaders.count() > 0) {
      for(let i = 0; i < (await this.tableHeaders.count()); i++) {
        if ((await this.tableHeaders.nth(i).innerText()).toLowerCase() === headerName.toLowerCase()) {
          return {
            locator: await this.tableHeaders.nth(i),
            position: i
          }
        }
      }
    }
    throw new Error('Unable to find any table headers')
  }
}