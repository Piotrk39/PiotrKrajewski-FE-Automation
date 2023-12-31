import { Page } from '@playwright/test';
import { DashboardPage } from './../pages/Dashboard/DashboardPage';


export class CommonSteps {
    
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {        
        await this.page.goto(url);
    }
}