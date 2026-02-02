import { ForgotPasswordPage } from '@pages/login/ForgotPassword.page'
import { test, expect } from '@playwright/test'

test('validate missing email message', async ({ page }) => {
  const forgotPwdPage = new ForgotPasswordPage(page)
  
  await forgotPwdPage.open()

  await forgotPwdPage.retrieveForgottenPassword('')

  await expect(forgotPwdPage.emailErrorText).toBeVisible()
  await expect(forgotPwdPage.emailErrorText).toHaveText('Please enter a valid email address.')
})

test('retrieve forgotten password', async ({ page }) => {
  const forgotPwdPage = new ForgotPasswordPage(page)
  
  await forgotPwdPage.open()

  await forgotPwdPage.retrieveForgottenPassword('test@test.com')

  await expect(forgotPwdPage.confirmationAlert).toBeVisible()
  await expect(forgotPwdPage.confirmationAlert)
    .toHaveText('An e-mail has been sent to you which explains how to reset your password.')
})

