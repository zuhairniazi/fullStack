import { test, expect } from '@playwright/test'

import { RegisterPage } from '@pages/login/Register.page'
import { LoginPage } from '@pages/login/Login.page'

test('register a new user', async ({ page }) => {
  const registerPage = new RegisterPage(page)
  const loginPage = new LoginPage(page)

  await registerPage.open()

  await registerPage.registerUser('agent01', 'SuperSecretPassword!')
  await expect(loginPage.alert).toHaveText('Successfully registered, you can log in now.')
})

test('verfiy username and password field errors', async ({ page }) => {
  const registerPage = new RegisterPage(page)

  await registerPage.open()

  await registerPage.enterMismatchPasswords('agent01', 'SuperSecretPassword!')
  await expect(registerPage.alert).toHaveText('Passwords do not match.')

  await registerPage.registerUser('', 'SuperSecretPassword!')
  await expect(registerPage.alert).toHaveText('All fields are required.')
})