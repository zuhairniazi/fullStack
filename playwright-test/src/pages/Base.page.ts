import { type Locator, type Page } from '@playwright/test'

export class BasePage {
  readonly page: Page
  tableMap = new Map()

  constructor (page: Page) {
    this.page = page
  }

  public async open(url: string = '') {
    await this.page.goto(url)
  }

  protected sanitizeData(value: string): string {
    return value.replace(' ', '').toLowerCase().trim()
  }

  public async populateTable() {
    const tableHeaders: Locator = await this.page.locator('th')
    const tableRows: Locator  = await this.page.locator('tr')
    

    for(let row = 1; row < await tableRows.count(); row++) {
      const data = await tableRows.nth(row).locator('td')
      const rowName = this.sanitizeData(await data.nth(0).innerText())

      for(let header = 1; header < await tableHeaders.count(); header++) {
        const headerName = this.sanitizeData(await tableHeaders.nth(header).innerText())
        const currentData =(await data.nth(header).innerText()).trim()
        this.tableMap.set(`${rowName}${headerName}`, currentData)
      }
    }
  }

  public async getTableValue(name: string, property?: string) {
    
    if (this.tableMap.size < 1) {
      await this.populateTable()
    }
    
    let sanitizedName = this.sanitizeData(name)
    
    if (property) {
      sanitizedName = sanitizedName.concat(this.sanitizeData(property))
    }

    return this.tableMap.get(`${sanitizedName}`)
  }

  public async setAuthHeader(username: string, password: string) {
    const authHeader = `Basic ${btoa(username + ':' + password)}`
    await this.page.setExtraHTTPHeaders({ Authorization: authHeader })
  }
}