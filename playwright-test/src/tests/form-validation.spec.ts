import { expect, test } from '@playwright/test'
import { formData, FormValidationPage, PaymentOptions } from '@pages/forms/FormValidation.page'
import { format } from 'date-fns'
import { FormConfirmationPage } from '@pages/forms/FormConfirmation.page'

test('Form Validation Page should proceed past registration when valid data is entered', async ({ page }) => {
  const formValidationPage = new FormValidationPage(page)
  await formValidationPage.open()

  const params: formData = {
    name: 'Joe Bananas',
    number: '123-4567890',
    date: format(new Date(), 'yyyy-MM-dd'),
    payment: PaymentOptions.CARD
  }

  await formValidationPage.fillForm(params)
  await expect(page.url()).toContain('/form-confirmation')

  const formConfirmationPage = new FormConfirmationPage(page)
  await expect(await formConfirmationPage.alert.innerText()).toBe('Thank you for validating your ticket')
  
})