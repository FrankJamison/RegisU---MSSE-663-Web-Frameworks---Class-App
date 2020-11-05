import { Given, Then } from 'cucumber';
import { HeroesPage } from '../pages/heroes.po';

const chaiAsExpected = require('chai').use(require('chai-as-promised'));
const expect = chaiAsExpected.expect;

const heroesPage = new HeroesPage();

    Given(/^Heroes: I navigate to the auth page$/, async () => {
        await heroesPage.navigateToLogin();
    });

    Then(/^Heroes: I see the authentiction home page$/, async () => {
        expect(await heroesPage.isAuthHomePageDisplayed()).to.be.true;
    });
    
    Then(/^Heroes: I enter my credentials$/, async () => {
        await heroesPage.enterValuesInInputField('#username', 'admin');
        await heroesPage.enterValuesInInputField('#password', 'password');
        await heroesPage.clickElement('#login-btn')
    });

    Then(/^Heroes: I see the heroes list$/, async() => {
        expect(await heroesPage.isElementVisible('#hero-list')).to.be.true;
    });
    
    Then(/^Heroes: I click on the heroes tab$/, async () => {
        await heroesPage.navigateToHeroes();
    });

    Then(/^Heroes: I see the heroes list again$/, async() => {
        expect(await heroesPage.isElementVisible('#hero-list')).to.be.true;
    });

    Then(/^Hero: Click on hero$/, async() => {
       await heroesPage.clickOnHero();
    });

    Then(/^Hero: See hero$/, async() => {
        expect(await heroesPage.isElementVisible('.hero-name')).to.be.true;
     });

