import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Click [aria-label="Inbox Items"] >> text=Contract: RetailAssistantRERUN Hirefifty
  await page.locator('[aria-label="Inbox Items"] >> text=Contract: RetailAssistantRERUN Hirefifty').click();

  // Click text=ReasonReason0 items selected >> [placeholder="Search"]
  await page.locator('text=ReasonReason0 items selected >> [placeholder="Search"]').click();

  // Click [aria-label="Main checkbox Not Checked"] >> text=Main
  await page.locator('[aria-label="Main checkbox Not Checked"] >> text=Main').click();

});