import { NavigationBase } from "./../NavigationBase";
import { DashboardPageObject } from './DashboardPageObject'; // Adjust the import path as needed

export class DashboardPage extends NavigationBase {

    async login(email: string, password: string) {
        await this.type(DashboardPageObject.EMAIL, email);
        await this.type(DashboardPageObject.PASSWORD, password);
    }

    async clickLogin() {
        await this.click(DashboardPageObject.LOGIN_BUTTON);
    }

    async logout() {
        await this.click(DashboardPageObject.USER_ICON);
        await this.click(DashboardPageObject.LOGOUT_BUTTON);
    }


}