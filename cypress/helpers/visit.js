export default function visit() {
  cy.visitStorybook();
  cy.injectAxe();
  cy.configureAxe({
    rules: [
      { id: 'landmark-one-main', enabled: false },
      { id: 'page-has-heading-one', enabled: false },
    ],
  });
}
