import { test, expect } from '@playwright/test'
import { format } from 'date-fns'

import { WebInputsPage } from '@pages/WebInputs.page'

test('validate entered data on web inputs page is properly recorded', async ({ page }) => {
  const webInputsPage = new WebInputsPage(page)

  const data = {
    number: 77,
    text: 'Silly Sally Selly Sully',
    password: 'uncrackable password',
    date: format(new Date(), 'yyyy-MM-dd')
  }
  
  await webInputsPage.open()
  await webInputsPage.enterDataAndDisplayInputs(data)
  
  await expect(webInputsPage.numberOutputTextbox).toHaveText(data.number.toString())
  await expect(webInputsPage.textOutputTextbox).toHaveText(data.text)
  await expect(webInputsPage.passwordOutputTextbox).toHaveText(data.password)
  await expect(webInputsPage.dateOutputTextbox).toHaveText(data.date)
})