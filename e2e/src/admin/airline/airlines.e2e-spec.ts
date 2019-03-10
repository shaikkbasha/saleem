import { browser, protractor, $, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
import { AirlinesPage } from './airlines.po';

describe('Airlines Page', () => {
    const airlinesPage = new AirlinesPage();
    beforeEach(() => {
        browser.sleep(1000);
        const origFn = browser.driver.controlFlow().execute;
        browser.waitForAngularEnabled(false);
        const EC = browser.ExpectedConditions;
        airlinesPage.navigateToAirlines();
        browser.wait(EC.visibilityOf($('#btn-airline-link')));
    });

    it('should display airlines Tab', () => {
        browser.waitForAngularEnabled(false);
        const EC = browser.ExpectedConditions;
        browser.wait(EC.visibilityOf($('#btn-airline-link')));

        const airlineTab = element(by.id('btn-airline-link'));
        expect(airlineTab.getText()).toContain('Airlines');
    });

    // it('Airlines page should be defined', () => {
    //     airlinesPage.gotoairlineModule();
    //     browser.waitForAngularEnabled(false);
    //     const EC = browser.ExpectedConditions;
    //     browser.wait(EC.visibilityOf($('#btn-airline-link')));
    //     expect(airlinesPage.getAirlineText().getAttribute('class')).toContain('active');
    // });

    it('go to stations module', () => {
        browser.waitForAngularEnabled(false);
        const EC = browser.ExpectedConditions;
        browser.wait(EC.visibilityOf($('#btn-stations-link')));
        airlinesPage.gotostationModule();
        expect(browser.getCurrentUrl()).toContain('/admin/stations');
    });

});
