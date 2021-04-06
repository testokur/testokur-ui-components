import { load, visit , terminalLog} from '../helpers';

describe('Heading', () => {
  before(() => {
    visit();
  });

  context('given story is rendered', () => {
    beforeEach(() => {
      load('Heading','Default');
    });
    it('renders correctly', () => {
      cy.percySnapshot('Heading');
    });
    it('should not have any axe errors', () => {
        cy.checkA11y(null, null, terminalLog);
    });
  });
});
