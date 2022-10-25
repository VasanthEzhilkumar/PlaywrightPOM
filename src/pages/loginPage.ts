import { Locator, Page } from '@playwright/test';

export  class loginpage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly signIn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('[aria-label="Username"]');
    this.password = page.locator('[aria-label="Password"]');
    this.signIn = page.locator('button:has-text("Sign In")');
  }

  async goto(country: string ) {

    if (country.includes("Romania"))
    {
      await this.page.goto('https://wd3-impl.workday.com/primark7/d/home.htmld');
      
    }
    if (country.includes("Slovakia"))
    {
      await this.page.goto ('https://wd3-impl.workday.com/primark2/d/home.htmld');
      //await this.page.goto('https://wd3-impl.workday.com/wday/authgwy/primark11/login.htmld');
    }
  }

  async sigIn(username:string, password:string) {
    
    await this.username.type(username);
    await this.password.type(password);
    await this.signIn.click();
    await this.page.waitForNavigation();
    //await this.page.waitForTimeout(2000)
  }
}
