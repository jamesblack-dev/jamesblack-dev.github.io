import { CypressInputPage } from "./input.page";
import { LoadNamesPage } from "./loadNames.page";

export class GameStatePage {
    private _selector: string = "div.gameState";

    private _element: Cypress.Chainable<JQuery<HTMLElement>>;

    public get loadNamesPage(){
        return new LoadNamesPage();
    }

    public constructor() {
        this._element = cy.get(this._selector);
    }
}