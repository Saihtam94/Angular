import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getChapterButton(button_id) {
  	return element(by.id(button_id));
  }

  getVideoDuration() {
  	return element(by.tagName('video')).getAttribute('currentTime');
  }
}
