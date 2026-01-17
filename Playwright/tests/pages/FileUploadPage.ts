import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object for the File Upload screen.
 *
 * RULE:
 * - Locators live here
 * - UI actions live here
 * - Assertions about THIS page live here
 */
export class FileUploadPage extends BasePage {
    // Locators are defined once and reused
    private fileInput = this.page.locator('#file-upload');
    private uploadBtn = this.page.locator('#file-submit');
    private uploadedFiles = this.page.locator('#uploaded-files');

    async goto() {
        // Navigation logic belongs to the page
        await this.page.goto('https://the-internet.herokuapp.com/upload', {
            waitUntil: 'domcontentloaded',
        });
    }

    async uploadFile(filePath: string) {
        // Playwright handles file dialogs automatically
        await this.fileInput.setInputFiles(filePath);
        await this.uploadBtn.click();
    }

    async expectUploadedFileName(name: string) {
        // Page-specific assertion
        await expect(this.uploadedFiles).toContainText(name);
    }
}
