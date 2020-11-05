import { browser } from 'protractor';
import { BasePage } from './base.po';

export class HeroesPage extends BasePage {
  private baseUrl = 'http://localhost:4200';
  private homePageEl = '#username';
  private logoutEl = '#logout';
  
  async navigateToLogin(): Promise<void> {
    await this.navigateToUrl(this.baseUrl);
  }

  async isAuthHomePageDisplayed(): Promise<boolean> {
    return (
      (await this.isElementVisible(this.homePageEl))
    );
  }

  async navigateToHeroes(): Promise<void> {
    await this.clickElement('#ngb-nav-2'); // clicks the heroes tab
  }
  
  async clickOnHero(): Promise<void> {
    await this.clickElement('#Spiderman');
  }
}

