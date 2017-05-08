import { HtppPage } from './app.po';

describe('htpp App', () => {
  let page: HtppPage;

  beforeEach(() => {
    page = new HtppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
