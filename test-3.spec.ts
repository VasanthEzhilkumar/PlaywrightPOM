import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Click text=ReasonReason0 items selected >> [placeholder="Search"]
  await page.locator('text=ReasonReason0 items selected >> [placeholder="Search"]').click();

  // Click [aria-label="Main checkbox Checked"] >> text=Main
  await page.locator('[aria-label="Main checkbox Checked"] >> text=Main').click();

  // Click text=Agreement to Complete a Job (DVP)
  await page.locator('text=Agreement to Complete a Job (DVP)').click();

  // Click text=Agreement on Student Work (DBPS)
  await page.locator('text=Agreement on Student Work (DBPS)').click();

  // Click text=Agreement to Perform Work (DPC)
  await page.locator('text=Agreement to Perform Work (DPC)').click();

  // Click [aria-label="Main checkbox Not Checked"] >> text=Main
  await page.locator('[aria-label="Main checkbox Not Checked"] >> text=Main').click();

  // Click text=Statutory
  await page.locator('text=Statutory').click();

  // Click button:has-text("Reset")
  await page.locator('button:has-text("Reset")').click();

  // Click [id="\35 6\$433945"]
  await page.locator('[id="\\35 6\\$433945"]').click();

  // Click button:has-text("Reset")
  await page.locator('button:has-text("Reset")').click();

});