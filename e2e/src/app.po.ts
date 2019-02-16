import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getChapterButtonState(button_id){
    return element(by.id(button_id)).getAttribute('aria-expanded');
  }

  getChapterButton(button_id) {
  	return element(by.id(button_id));
  }

  getVideoDuration() {
  	return element(by.tagName('video')).getAttribute('currentTime');
  }

  getMapLocation() {
    const latitude = element(by.id('map_latitude')).getText();
    const longitude = element(by.id('map_longitude')).getText();
    return {lat: latitude, lng: longitude}
  }
}
