import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Click text=TypeType0 items selected >> [placeholder="Search"]
  await page.locator('text=TypeType0 items selected >> [placeholder="Search"]').click();

  // Check [aria-label="Home checkbox Not Checked"] input[type="checkbox"]
  await page.locator('[aria-label="Home checkbox Not Checked"] input[type="checkbox"]').check();

});