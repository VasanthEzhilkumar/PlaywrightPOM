import { Locator, Page } from "@playwright/test";


export class proxyPage {
readonly page : Page;
readonly actas : Locator;
readonly proxyokButton : Locator;
readonly searchboxhome : Locator;
readonly proxystop : Locator;
readonly startproxyClick : Locator;
readonly okButton : Locator;


constructor (page: Page)
{
    this.page = page;
    this.actas = page.locator ('text=Act AsAct As0 items selected >> [placeholder="Search"]');
    this.proxyokButton = page.locator ('button:has-text("OK")');
    this.searchboxhome = page.locator('[aria-label="Search Workday "]');
    this.proxystop = page.locator ('text=Stop Proxy');
    this.startproxyClick = page.locator('text=Start Proxy');
    this.okButton = page.locator('button:has-text("OK")');
}

async startProxy(actastxt: string) {

    //await this.searchboxhome.fill(searchtext);
    await this.startproxyClick.click();
    await this.actas.fill(actastxt);
    await this.actas.press('Enter');
    await this.page.waitForTimeout(500);
    await this.proxyokButton.click();
}

async stopproxy (){
    
    await this.proxystop.click();

    await this.okButton.click();

}

}