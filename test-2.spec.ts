import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://wd3-impl.workday.com/primark11/d/unifiedinbox/initialinbox/2998$17139.htmld
  await page.goto('https://wd3-impl.workday.com/primark11/d/unifiedinbox/initialinbox/2998$17139.htmld');

  // Click [id="wd-InboxRow-795\$88854999"] >> text=Hire: SKAutomationRERUN1 HireoneRE - 870 Retail Team 1 (Nitiz Nuzyhy (10503496)
  await page.locator(':nth-match(:text=("Hire: SKAutomationRERUN1 HireoneRE"),1)').click();
  await expect(page).toHaveURL('https://wd3-impl.workday.com/primark11/d/unifiedinbox/initialinbox/2998$17139.htmld');

  // Click [id="wd-InboxRow-795\$88854999"] >> text=Hire: SKAutomationRERUN1 HireoneRE - 870 Retail Team 1 (Nitiz Nuzyhy (10503496)
  await page.locator('[id="wd-InboxRow-795\\$88854999"] >> text=Hire: SKAutomationRERUN1 HireoneRE - 870 Retail Team 1 (Nitiz Nuzyhy (10503496) ').click();

});