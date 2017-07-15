import { YapperPage } from './app.po';

describe('yapper App', function() {
  let page: YapperPage;

  beforeEach(() => {
    page = new YapperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
