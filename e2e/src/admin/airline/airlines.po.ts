import { browser, $, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class AirlinesPage {

    navigateToAirlines() {
        browser.get('/admin/airlines').then(function() {
        });
        // element( by.id('#lnk-home-airline') ).click();
    }
    gotoairlineModule() {
        return element( by.id('btn-airline-link') ).click();
    }
    getAirlineText() {
        return $('#btn-airline-link');
    }
    gotostationModule() {
        return element( by.id('btn-stations-link') ).click();
    }

}
