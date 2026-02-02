import { RadioButtonPage } from '@pages/RadioButton.page'
import { test, expect } from '@playwright/test'

test('Radio buttons', async ({ page }) => {
  const radioButtonPage = new RadioButtonPage(page)
  await radioButtonPage.open()

  await radioButtonPage.redRadioButton.check()
  await expect(radioButtonPage.redRadioButton).toBeChecked()
  
  await radioButtonPage.yellowRadioButton.check()
  await expect(radioButtonPage.yellowRadioButton).toBeChecked()

  await radioButtonPage.blackRadioButton.check()
  await expect(radioButtonPage.blackRadioButton).toBeChecked()
  
  await expect(radioButtonPage.greenRadioButton).toBeDisabled()

  await radioButtonPage.basketballRadioButton.check()
  await expect(radioButtonPage.basketballRadioButton).toBeChecked()

  await radioButtonPage.footballRadioButton.check()
  await expect(radioButtonPage.footballRadioButton).toBeChecked()

  await radioButtonPage.tennisRadioButton.check()
  await expect(radioButtonPage.tennisRadioButton).toBeChecked()

})