import { test } from '../fixtures/test';

/**
 * Simple, focused test.
 * No selectors. No setup noise.
 */
test('select dropdown option', async ({ dropdown }) => {
    await dropdown.goto();
    await dropdown.selectOptionByValue('1');
    await dropdown.expectSelectedValue('1');
});
