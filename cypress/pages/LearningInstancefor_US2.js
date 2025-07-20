class LearningInstance {
  clickSaveButton() {
    cy.contains("button", "AI").should("be.visible").click();
  }

  click() {
    cy.get('a[aria-label="Document Automation"]')
      .should("be.visible")
      .click({ force: true });
  }

  clickCreateLearningInstance() {
    cy.contains("Create Learning Instance").click(); 
  }

  clickchose() {
    cy.contains("span", "Invoices").should("be.visible").click();
  }
  selectuser() {
    cy.contains("div", "User-defined").should("be.visible").click();
  }
  enterNameField(text) {
    cy.get('input[name="name"].textinput-cell-input-control')
      .should("be.visible")
      .clear()
      .type(text, { force: true }); 
  }
  clickNextButton() {
    cy.get('button[aria-label="Next"][name="submit"]')
      .should("be.visible")
      .click({ force: true });
    e;
  }
  clickAddFieldButton() {
    cy.get('button[aria-label="Add a field"]')
      .should("be.visible")
      .click({ force: true });
  }
  enterFieldName(fieldName) {
    cy.get('input[name="name"][placeholder="Field name"]')
      .should("be.visible")
      .clear()
      .type(fieldName, { force: true });
  }
  enterFieldLabel(labelText) {
    cy.get('input[name="displayName"][placeholder="Field label"]')
      .should("be.visible")
      .clear()
      .type(labelText, { force: true });
  }
  clickConfidenceThresholdField() {
    cy.get('input[name="confidenceThreshold"][aria-label="Confidence (0-100)"]')
      .should("be.visible")
      .click({ force: true });
  }
  clickCreateButton() {
    cy.get('button[aria-label="Create"]')
      .should("be.visible")
      .click({ force: true });
  }
}
export default LearningInstance;
