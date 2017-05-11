import { LaboratorioIVMayo11Page } from './app.po';

describe('laboratorio-ivmayo11 App', () => {
  let page: LaboratorioIVMayo11Page;

  beforeEach(() => {
    page = new LaboratorioIVMayo11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
