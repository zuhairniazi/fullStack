import { DynamicTablePage } from '@pages/DynamicTables.page'
import { test, expect, Page } from '@playwright/test'

test.describe.configure({ mode: 'serial' })

test.describe('Dynamic Tables', () => {
  let page: Page
  let dynamicTablePage: DynamicTablePage
  
  test.beforeAll(async ({ browser}) => {
    page = await browser.newPage()
    dynamicTablePage = new DynamicTablePage(page)
    await dynamicTablePage.open()
    await dynamicTablePage.populateTable()
  })

  test('verify value in yellow matches table view', async () => {
    const [tableKey, value] = (await dynamicTablePage.yellowTestValue.innerText()).split(':')
    await expect(await dynamicTablePage.getTableValue(tableKey)).toBe(value.trim())
  })

  test('verify Chrome Network value exists', async () => {
    const value = await dynamicTablePage.getTableValue('chrome', 'Network')
    expect(value).toBeDefined()
  })

  test('verify Chrome CPU value exists', async () => {
    const value = await dynamicTablePage.getTableValue('Chrome', 'cPu')
    expect(value).toBeDefined()
  })

  test('verify System Network value exists', async () => {
    const value = await dynamicTablePage.getTableValue('System', 'network')
    expect(value).toBeDefined()
  })

  test('verify System Memory value exists', async () => {
    const value = await dynamicTablePage.getTableValue('system', 'Memory')
    expect(value).toBeDefined()
  })

  test('verify Firefox Memory value exists', async () => {
    const value = await dynamicTablePage.getTableValue('Firefox', 'memory')
    expect(value).toBeDefined()
  })

  test('verify Firefox Disk value exists', async () => {
    const value = await dynamicTablePage.getTableValue('firefox', 'disk')
    expect(value).toBeDefined()
  })

  test('verify Internet Explorer CPU value exists', async () => {
    const value = await dynamicTablePage.getTableValue('internet explorer', 'CPU')
    expect(value).toBeDefined()
  })

  test('verify Internet Explorer Network value exists', async () => {
    const value = await dynamicTablePage.getTableValue('internetExplorer', 'network')
    expect(value).toBeDefined()
  })
})
