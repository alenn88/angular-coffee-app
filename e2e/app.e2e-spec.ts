import { AngularCoffeeAppPage } from './app.po';

describe('angular-coffee-app App', function() {
  let page: AngularCoffeeAppPage;

  beforeEach(() => {
    page = new AngularCoffeeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
