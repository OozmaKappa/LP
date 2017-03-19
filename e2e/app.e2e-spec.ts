import { LebenpurPage } from './app.po';

describe('lebenpur App', function() {
  let page: LebenpurPage;

  beforeEach(() => {
    page = new LebenpurPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
