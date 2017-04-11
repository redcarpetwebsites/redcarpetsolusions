import { RedCarpetWebsitePage } from './app.po';

describe('red-carpet-website App', function() {
  let page: RedCarpetWebsitePage;

  beforeEach(() => {
    page = new RedCarpetWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
