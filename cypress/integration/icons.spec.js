import { load, visit, terminalLog } from '../helpers';

describe('Icons', () => {
  before(() => {
    visit();
  });

  context('given story is rendered', () => {
    beforeEach(() => {
      load('Icons', 'Default');
    });
    it('renders correctly', () => {
      cy.percySnapshot('Icons');
    });
    it('should not have any axe errors', () => {
      cy.checkA11y(null, null, terminalLog);
    });
  });
});
