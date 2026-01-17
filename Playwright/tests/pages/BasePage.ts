import { Page } from '@playwright/test';

/**
 * BasePage exists to share common functionality
 * across all Page Objects.
 *
 * WHY:
 * - Avoid repeating constructor logic
 * - Central place for future helpers (waitForLoad, screenshots, etc.)
 */
export class BasePage {
    constructor(protected readonly page: Page) { }
}
