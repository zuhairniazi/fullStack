import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object for dropdown interactions.
 *
 * WHY:
 * - Dropdown logic is notoriously flaky
 * - Encapsulating it prevents test duplication
 */
export class DropdownPage extends BasePage {
    private dropdown = this.page.locator('#dropdown');

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/dropdown', {
            waitUntil: 'domcontentloaded',
        });
    }

    async selectOptionByValue(value: string) {
        // selectOption is safer than clicking options manually
        await this.dropdown.selectOption(value);
    }

    async expectSelectedValue(value: string) {
        await expect(this.dropdown).toHaveValue(value);
    }
}
