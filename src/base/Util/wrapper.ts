import {Locator, Page} from "@playwright/test"

export default class Wrapper {


    constructor (public page:Page){
    }

    public async findLocator(value: string , options?: {
        frame?: string,
        tabID?: number,
        timeout?: number,
        has?: Locator,
        hasText?: string

    }): Promise<Locator> {
        if(options?.tabID) {
           this.page = this.page.context().pages()[options.tabID]

        }
        if(options?.frame) {
            this.page.frameLocator (options.frame).locator(value,{
                has: options?.has,
                hasText: options?.hasText    
            })
        }
        return this.page.locator(value, {
            has: options?.has,
            hasText: options?.hasText
        })
    }

    public getUrl() {
        return this.page.url();
    }
}