import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object for radio button interactions.
 *
 * Uses DemoQA because it exposes accessible radio controls.
 */
export class RadioPage extends BasePage {
    async goto() {
        await this.page.goto('https://demoqa.com/radio-button', {
            waitUntil: 'domcontentloaded',
        });
    }

    async chooseYes() {
        // Role/text-based selectors are resilient to layout changes
        await this.page.getByText('Yes', { exact: true }).click();
    }

    async expectResult(text: string) {
        await expect(this.page.locator('.text-success')).toHaveText(text);
    }
}
