import LoginPage from '../pages/LoginPagefor_US1';
import BotCreationPage from '../pages/BotCreationPagefor_US1';
import MessageBoxPage from '../pages/MessageBoxPagefor_US1';
import LearningInstance from '../pages/LearningInstancefor_US2';

const loginPage = new LoginPage();//obj login page
const botPage = new BotCreationPage();//obj bot page
const messageBox = new MessageBoxPage();// obj message page
const learningInstance = new LearningInstance();//obj learning instance

describe('Use Case 1 - Create Message Box Bot', () => {
  before(function () {
    cy.fixture('testData').then((data) => {  //cypress/fixtures/testdata
      this.data = data;
    });
  });

  it('should log in and create a bot successfully', function () {
    loginPage.login(this.data.email, this.data.password);
    cy.url().should('include', '/home');

    botPage.clickCreateBot();
    botPage.enterBotName(this.data.botName);
     botPage.clickCreateAndEdit();
     messageBox.searchMessageBox('message box');
     messageBox.selectMessageBox();
     messageBox.enterMessage('This is my message box');
     messageBox.clickSaveButton();
    messageBox.assertMessageBoxAdded();
    messageBox.clickbutt();
    /*
    learningInstance.clickSaveButton();
    learningInstance.click();
    learningInstance.clickCreateLearningInstance();
    learningInstance.clickchose();
    learningInstance.selectuser();
    learningInstance.enterNameField('test');
    learningInstance.clickNextButton();
    learningInstance.clickAddFieldButton();
    learningInstance.enterFieldName('test');
    learningInstance.enterFieldLabel('test');
    learningInstance.clickConfidenceThresholdField();
    learningInstance.clickCreateButton();
    */
  });
});