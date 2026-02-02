import { BasicAuthPage } from '@pages/login/BasicAuth.page'
import { HomePage } from '@pages/Home.page'
import { test, expect } from '@playwright/test'

test('Login as user', async ({ page }) => {
  const basicAuthPage = new BasicAuthPage(page)

  await basicAuthPage.setAuthHeader('admin', 'admin')
  await basicAuthPage.open()
  
  await expect(basicAuthPage.alert).toHaveText('Congratulations! You must have the proper credentials.')
})
