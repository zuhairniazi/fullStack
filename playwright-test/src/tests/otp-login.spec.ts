import { OtpLoginPage } from '@pages/login/OtpLogin.page'
import { SecurePage } from '@pages/login/Secure.page'
import { test, expect } from '@playwright/test'

test('Verify email error', async ({ page }) => {
  const otpLoginPage = new OtpLoginPage(page)

  await otpLoginPage.open()

  await otpLoginPage.getOtpCode('')
  await expect(otpLoginPage.emailErrorText).toBeVisible()
  await expect(otpLoginPage.emailErrorText).toHaveText('Please enter a valid email address.')
})

test('Verify OTP error', async ({ page }) => {
  const otpLoginPage = new OtpLoginPage(page)

  await otpLoginPage.open()

  await otpLoginPage.getOtpCode('practice@expandtesting.com')
  await expect(otpLoginPage.emailAlert).toHaveText('We\'ve sent an OTP code to your email: practice@expandtesting.com')

  await otpLoginPage.verifyOtpCode('')
  await expect(otpLoginPage.otpErrorText).toBeVisible()
  await expect(otpLoginPage.otpErrorText).toContainText('Please enter a correct 6-digit OTP code.')
})

test('Verify login with otp code', async ({ page }) => {
  const otpLoginPage = new OtpLoginPage(page)
  const securePage = new SecurePage(page)

  await otpLoginPage.open()

  await otpLoginPage.getOtpCode('practice@expandtesting.com')
  await expect(otpLoginPage.emailAlert).toHaveText('We\'ve sent an OTP code to your email: practice@expandtesting.com')

  await otpLoginPage.verifyOtpCode('214365')
  await expect(securePage.greetingText).toHaveText('Hi, Guest!')
})
