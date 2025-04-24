import { test, expect } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true, // Ensure headless mode is enabled
  },

test('Navigate to Google and search for Valentina Burgos Herrera', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Locate the search box and perform the search
  const searchBox = page.locator('input[name="q"]');
  await searchBox.fill('Valentina Burgos Herrera');
  await searchBox.press('Enter');

  // Wait for search results to load
  await page.waitForSelector('#search');

  // Check that the results page is visible
  const results = page.locator('#search');
  expect(await results.isVisible()).toBe(true);
});
