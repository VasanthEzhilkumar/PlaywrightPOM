import { Locator, Page } from '@playwright/test';

export  class homepage {
  readonly page: Page;
  readonly searchboxHome: Locator;
  readonly hireEmployeetask: Locator;
  readonly createpoistion: Locator;
  readonly searchIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchboxHome = page.locator('[aria-label="Search Workday "]');
    this.hireEmployeetask = page.locator('text=Hire Employee >> nth=1');
    this.searchIcon = page.locator('#wd-searchInput div svg[role="presentation"]');
    //this.createpoistion = page.locator();
  }
    /**
     * Creating a new Account
     * @param search 
     * @param password 
     * @param confirmPassword 
     * @param firstName 
     * @param lastName 
     * @param phoneNumber 
     * @param country 
     * @param city 
     * @param address 
     * @param state 
     * @param postalCode 
     * @param allowOffersPromotion 
     * @returns 
     */


  async searchHireEmployee() {
    
    await this.searchboxHome.fill('Hire Employee');
    await this.searchboxHome.press('Enter');
    await this.hireEmployeetask.click();
    await this.page.waitForTimeout(2000)
  }

  async CreatePoistion() {
    
    await this.searchboxHome.fill('Create Position');
    await this.searchboxHome.press('Enter');
    await this.hireEmployeetask.click();
    await this.page.waitForTimeout(2000)
  }
}
