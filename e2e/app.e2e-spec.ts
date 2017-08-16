import { AnimationPage } from './app.po';

describe('animation App', () => {
  let page: AnimationPage;

  beforeEach(() => {
    page = new AnimationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
