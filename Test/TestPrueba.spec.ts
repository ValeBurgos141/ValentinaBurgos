import { test, expect, defineConfig } from '@playwright/test';

test('Navigate to Google and search for Valentina Burgos Herrera', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Accept cookies if the consent dialog appears (optional, depending on region)
  const acceptButton = page.locator('button:has-text("I agree")');
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }

  // Type the search query into the search bar
  await page.fill('#APjFqb', 'Valentina Burgos Herrera');

  // Press Enter to search
  await page.press('#APjFqb', 'Enter');
});
