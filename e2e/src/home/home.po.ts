import { browser, by, element, $ } from 'protractor';

export class HomePage {
    navigateTo() {
        browser.get('/home');
    }
}

