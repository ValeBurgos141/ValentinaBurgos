import { test, expect } from '@playwright/test';

test('Navigate to Google and search for "Valentina Burgos Herrera"', async ({ page }) => {
    // Navigate to Google
    await page.goto('https://www.google.com');

    // Search for "Valentina Burgos Herrera"
    const searchBox = await page.locator('input[name="q"]');
    await searchBox.fill('Valentina Burgos Herrera');
    await searchBox.press('Enter');

    // Wait for results to load
    await page.waitForTimeout(3000);

    // Check if results contain the search term
    const resultStats = await page.locator('#result-stats');
    expect(await resultStats.isVisible()).toBe(true);
});
