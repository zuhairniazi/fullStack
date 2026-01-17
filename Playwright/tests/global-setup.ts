import { chromium, FullConfig, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const AUTH_DIR = path.resolve(__dirname, '..', '.auth');
const AUTH_FILE = path.join(AUTH_DIR, 'user.json');

export default async function globalSetup(config: FullConfig) {
    if (fs.existsSync(AUTH_FILE)) return;

    fs.mkdirSync(AUTH_DIR, { recursive: true });

    const baseURL = process.env.BASE_URL;
    const username = process.env.E2E_USERNAME;
    const password = process.env.E2E_PASSWORD;

    if (!baseURL || !username || !password) {
        throw new Error('Missing BASE_URL / E2E_USERNAME / E2E_PASSWORD env vars.');
    }

    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Herokuapp login
    await page.goto(`${baseURL}/login`, { waitUntil: 'domcontentloaded' });

    await page.locator('#username').fill(username);
    await page.locator('#password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();

    // Proof of login success
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
    await page.waitForURL('**/secure', { timeout: 30_000 });

    await page.context().storageState({ path: AUTH_FILE });
    await browser.close();
}
