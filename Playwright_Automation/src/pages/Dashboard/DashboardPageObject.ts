export class DashboardPageObject {
    
    static LOGIN_PAGE_TITLE = "//h1";
    static EMAIL = "#email";
    static PASSWORD = "#password";
    static LOGIN_BUTTON = "//input[@value]";
    static USER_ICON = "#user";
    static LOGOUT_BUTTON = "#logout";
    
    static generateParagraph(number: number) {
        return `(//p)[${number}]`;
    }
}