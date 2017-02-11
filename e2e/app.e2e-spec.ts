import { Todomvc0211Page } from './app.po';

describe('todomvc0211 App', function() {
  let page: Todomvc0211Page;

  beforeEach(() => {
    page = new Todomvc0211Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
