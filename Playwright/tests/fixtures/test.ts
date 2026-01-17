import { test as base, expect } from '@playwright/test';
import { FileUploadPage } from '../pages/FileUploadPage';
import { DropdownPage } from '../pages/DropdownPage';
import { RadioPage } from '../pages/RadioPage';

/**
 * This file extends Playwright’s built-in `test`
 * to provide ready-to-use Page Objects as fixtures.
 *
 * WHY:
 * - Keeps spec files clean
 * - Centralizes object creation
 * - Makes scaling easy as pages grow
 */

type Pages = {
    fileUpload: FileUploadPage;
    dropdown: DropdownPage;
    radio: RadioPage;
};

export const test = base.extend<Pages>({
    /**
     * Each fixture receives the Playwright `page`
     * and returns a fully constructed Page Object.
     */
    fileUpload: async ({ page }, use) => {
        await use(new FileUploadPage(page));
    },

    dropdown: async ({ page }, use) => {
        await use(new DropdownPage(page));
    },

    radio: async ({ page }, use) => {
        await use(new RadioPage(page));
    },
});

// Re-export expect so tests import from ONE place
export { expect };
