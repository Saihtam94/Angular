import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to angular-road66!');
  });

  it('should have an operating menu', () => {
    page.navigateTo();
    page.getChapterButton('chapters').click();
    expect(page.getChapterButtonState('chapters')).toEqual('true');
  });

  it('should set video duration to 970', () => {
    page.navigateTo();
    page.getChapterButton('chapters').click();
    const white_house = page.getChapterButton('White House');
    browser.sleep(2000);
    white_house.click();
    expect(page.getVideoDuration()).toEqual('970');
  });

  
// Test doesn't work
  it('should set map location to 34.09, -118.33', () => {
    page.navigateTo();
    page.getChapterButton('chapters').click();
    const hollywood = page.getChapterButton('Searching Hollywood');
    browser.sleep(2000);
    hollywood.click();
    const coordinates = page.getMapLocation();
    expect(coordinates.lat).toEqual('34.09');
    expect(coordinates.lng).toEqual('-118.33');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
