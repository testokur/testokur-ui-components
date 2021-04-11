import { load, visit, terminalLog } from '../helpers';

describe('InputField', () => {
  before(() => {
    visit();
  });

  context('given story is rendered', () => {
    beforeEach(() => {
      load('InputField', 'Default');
    });
    it('renders correctly', () => {
      cy.percySnapshot('InputField');
    });
    it('should not have any axe errors', () => {
      cy.checkA11y(null, null, terminalLog);
    });
  });
});
