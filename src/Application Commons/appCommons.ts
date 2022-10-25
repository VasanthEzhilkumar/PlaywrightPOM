import { Locator ,Page } from "@playwright/test";

export class appCommons{ 


 readonly page: Page;
 readonly inboxtitle: Locator;
 readonly searchboxhome : Locator;
 readonly successEvent : Locator;
readonly successClose : Locator;
readonly refreshButton : Locator;
readonly clearSearch : Locator;
readonly eventApproved : Locator;
readonly eventSubmitted: Locator
readonly markedcompleted :Locator;

    constructor(page: Page) {
        this.page = page;
        this.inboxtitle = page.locator("//button[@title='Inbox']");
        this.searchboxhome = page.locator('[aria-label="Search Workday "]');
        //this.searchboxhome = page.locator('[placeholder="Search"]');
        this.successEvent = page.locator('h2:has-text("Success! Event submitted")');
        this.eventApproved = page.locator('text=Success! Event approved');
        this.successClose = page.locator('[aria-label="Close"] >> nth=2');
        this.refreshButton = page.locator('button:has-text("Refresh")');
        this.clearSearch = page.locator('[aria-label="clear search"]');
        this.eventSubmitted = page.locator('text=You have submitted');
        this.markedcompleted = page.locator('text=You have marked as Complete');

    
      }


    async  ClickInbox()
    {
        await this.inboxtitle.click();
    }
    
    async Searchbox (searchtext: string )
    {
        if (await (this.clearSearch.isVisible()))
        {
            await this.clearSearch.click();
        }
        await this.page.waitForTimeout(500);
        await this.searchboxhome.fill(searchtext);
        await this.searchboxhome.press('Enter');
    }

    async SearchboxEmp (searchtext: string )
    {
        // if (await (this.clearSearch.isVisible()))
        // {
        //     await this.clearSearch.click();
        // }
        await this.page.waitForTimeout(500);
        await this.searchboxhome.fill(searchtext);
        await this.searchboxhome.press('Enter');
    }

    async SuccessEventHandle() {

        await this.page.waitForTimeout(2000);
        if (await this.successEvent.isVisible())
        {
            await this.successClose.click();
        }
        else if  (await this.eventApproved.isVisible())
        {
            await this.successClose.click();
        }
        else if  (await this.eventSubmitted.isVisible())
        {
            await this.successClose.click();
        }
        else if  (await this.markedcompleted.isVisible())
        {
            await this.successClose.click();
        }
        
    }
    async refreshInbox(){

        await this.page.waitForTimeout(2000);
        if(await this.refreshButton.isVisible())
        {
            await this.refreshButton.click();
        }
    
    }

}