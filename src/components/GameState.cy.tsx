
import { GameStatePage } from "../testing/gameState.page";
import GameState from "./GameState";

describe("<GameState />", () => {
  beforeEach(()=>{
    cy.mount(<GameState />)
  });
  it("renders and inputs", () => {
    var gameStatePage = new GameStatePage();
    gameStatePage.loadNamesPage.input1.enterText("Bob");
    gameStatePage.loadNamesPage.input1.hasValue("Bob");
    gameStatePage.loadNamesPage.input2.enterText("Sally");
    gameStatePage.loadNamesPage.input2.hasValue("Sally");
  });

  it("accepts values and loads next view", () => {
    var gameStatePage = new GameStatePage();
    gameStatePage.loadNamesPage.input1.enterText("Bob");
    gameStatePage.loadNamesPage.input2.enterText("Sally");
    gameStatePage.loadNamesPage.submitButton.click();
  });
})