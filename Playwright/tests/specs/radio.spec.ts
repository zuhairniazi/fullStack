import { test } from '../fixtures/test';

/**
 * Tests should describe behavior,
 * not how the UI is wired.
 */
test('select radio button', async ({ radio }) => {
    await radio.goto();
    await radio.chooseYes();
    await radio.expectResult('Yes');
});
