class MessageBoxPage {
  searchMessageBox(text) {
    cy.get('input[placeholder="Search actions"]', { timeout: 10000 }) // waits up to 10 seconds
      .should("be.visible")
      .type(text);
  }
  selectMessageBox() {
    cy.get('button[name="item-button"]')
      .contains("Message box")
      .scrollIntoView()
      .should("be.visible")
      .dblclick({ force: true });
  }
  enterMessage(message) {
    cy.get('div[contenteditable="true"][name="content"]')
      .should("be.visible")
      .click({ force: true })
      .focused()
      .type(message, { force: true });
  }

  clickSaveButton() {
    cy.contains("button", "Save").should("be.visible").click();
  }
  clickbutt() {
    cy.contains("button", "Close").should("be.visible").click();
  }
  assertMessageBoxAdded() {
    cy.contains("Message box").should("exist"); //for confirmation
  }
}

export default MessageBoxPage;
