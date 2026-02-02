import { DynamicPaginationTablePage } from '@pages/DynamicPaginationTable.page'
import { test, expect } from '@playwright/test'

test.describe.configure({ mode: 'serial' })
let dynamicPagTablePage: DynamicPaginationTablePage

test.beforeAll(async ({ browser }) => {
  dynamicPagTablePage = new DynamicPaginationTablePage(await browser.newPage())
  await dynamicPagTablePage.open()
  await dynamicPagTablePage.populateTable()
})
test.describe('Dynamic Pagination Table', () => {

  test('should have a show entries dropdown that displays the correct number of entries', async () => {
    await dynamicPagTablePage.showEntriesDropdown.selectOption({ label: '3' })
    await expect(dynamicPagTablePage.displayedRecords).toHaveText(dynamicPagTablePage.entryCountPhrase(1, 3))

    await dynamicPagTablePage.showEntriesDropdown.selectOption({ label: '5' })
    await expect(dynamicPagTablePage.displayedRecords).toHaveText(dynamicPagTablePage.entryCountPhrase(1, 5))

    await dynamicPagTablePage.showEntriesDropdown.selectOption({ label: '10' })
    await expect(dynamicPagTablePage.displayedRecords).toHaveText(dynamicPagTablePage.entryCountPhrase(1, 10))

    await dynamicPagTablePage.showEntriesDropdown.selectOption({ label: 'All' })
    await expect(dynamicPagTablePage.displayedRecords).toHaveText(dynamicPagTablePage.entryCountPhrase(1, 10))
  })

  test('should navigate through pages using the next button', async () => {
    await dynamicPagTablePage.showEntriesDropdown.selectOption({ label: '3' })
    await expect(dynamicPagTablePage.displayedRecords).toHaveText(dynamicPagTablePage.entryCountPhrase(1, 3))

    await dynamicPagTablePage.nextButton.click()
    await expect(dynamicPagTablePage.displayedRecords).toHaveText(dynamicPagTablePage.entryCountPhrase(4, 6))

    await dynamicPagTablePage.nextButton.click()
    await expect(dynamicPagTablePage.displayedRecords).toHaveText(dynamicPagTablePage.entryCountPhrase(7, 9))

    await dynamicPagTablePage.nextButton.click()
    await expect(dynamicPagTablePage.displayedRecords).toHaveText(dynamicPagTablePage.entryCountPhrase(10, 10))

    await dynamicPagTablePage.showEntriesDropdown.selectOption({ label: '5' })
    await expect(dynamicPagTablePage.displayedRecords).toHaveText(dynamicPagTablePage.entryCountPhrase(6, 10))

    await dynamicPagTablePage.previousButton.click()
    await expect(dynamicPagTablePage.displayedRecords).toHaveText(dynamicPagTablePage.entryCountPhrase(1, 5))
  })

  test('search should display the correct student information', async () => {
    await dynamicPagTablePage.searchTextbox.fill('Alice Johnson')
    await expect(await dynamicPagTablePage.getSearchResultCount()).toBe('1')

    const majorHeader = await dynamicPagTablePage.getTableHeaderAndPosition('Major')
    await expect(await dynamicPagTablePage.tableData.nth(majorHeader.position).innerText()).toBe('Mathematics')
  })
})
