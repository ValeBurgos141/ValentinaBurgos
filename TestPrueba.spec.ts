import { test, expect } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true, // Ensure headless mode is enabled
  },

//test.use({ headless: false }); // Ensure the browser runs in visual mode

test('Navigate to Google and search for "Valentina Burgos Herrera"', async ({ page }) => {
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
  await page.waitForTimeout(4000); 
});
