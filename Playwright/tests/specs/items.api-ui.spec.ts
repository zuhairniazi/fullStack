import { test, expect } from '@playwright/test';
import { ItemsClient } from '../api/clients/ItemsClient';
import { ItemsPage } from '../pages/ItemsPage';

test('create item via API then verify in UI @regression @api @ui', async ({ page, request }) => {
    const apiBaseUrl = process.env.API_BASE_URL ?? process.env.BASE_URL;
    if (!apiBaseUrl) throw new Error('Set API_BASE_URL (or BASE_URL)');

    const items = new ItemsClient(request);

    // Create test data via API
    const created = await items.createItem(apiBaseUrl, { name: `Item-${Date.now()}` });

    // Verify in UI (storageState already logged in via globalSetup)
    const itemsPage = new ItemsPage(page);
    await itemsPage.goto();
    await itemsPage.expectItemVisible(created.name);

    // Optional cleanup (depends on your environment policies)
    await items.deleteItem(apiBaseUrl, created.id);
});
