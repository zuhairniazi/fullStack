import { test, expect } from '@playwright/test'

import { LoginPage } from '@pages/login/Login.page'
import { SecurePage } from '@pages/login/Secure.page'

test('login as user', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const securePage = new SecurePage(page)

  await loginPage.open()

  await loginPage.loginUser('practice', 'SuperSecretPassword!')
  await expect(securePage.alert).toBeVisible()
  await expect(securePage.alert).toHaveText('You logged into a secure area!')
  await expect(securePage.greetingText).toHaveText('Hi, practice!')

  await securePage.closeAlert.click()
  await expect(securePage.alertContainer).toBeEmpty()

  await securePage.logoutButton.click()
  await expect(securePage.alert).toBeVisible()
  await expect(securePage.alert).toHaveText('You logged out of the secure area!')
})

test('verfy username and password field errors', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.open()

  await loginPage.loginUser('invalid', 'data')
  await expect(loginPage.alert).toBeVisible()
  await expect(loginPage.alert).toHaveText('Your username is invalid!')

  await loginPage.closeAlert.click()
  await expect(loginPage.alertContainer).toBeEmpty()

  await loginPage.loginUser('practice', 'invalidPassword')
  await expect(loginPage.alert).toBeVisible()
  await expect(loginPage.alert).toHaveText('Your password is invalid!')

  await loginPage.closeAlert.click()
  await expect(loginPage.alertContainer).toBeEmpty()
})