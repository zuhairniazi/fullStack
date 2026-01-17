import { expect, Locator, Page } from '@playwright/test';

export class ItemsPage {
    private readonly page: Page;
    private readonly itemsList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.itemsList = page.getByTestId('items-list'); // ideal if your app has data-testid
    }

    async goto() {
        await this.page.goto('/items', { waitUntil: 'domcontentloaded' });
    }

    async expectItemVisible(name: string) {
        await expect(this.itemsList.getByText(name, { exact: true })).toBeVisible();
    }
}
