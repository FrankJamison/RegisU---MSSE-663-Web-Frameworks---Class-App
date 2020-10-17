import { BasePage } from './base.po';

export class AuthPage extends BasePage {
    private baseUrl = 'http://localhost:4200';
    private loginEl = '#username';

    async navigateToLogin(): Promise<void> {
        await this.navigateToUrl(this.baseUrl);
    }

    async isAuthHomePageDisplayed(): Promise<boolean> {
        return (
            (await this.isElementVisible(this.loginEl))
        );
    }
}