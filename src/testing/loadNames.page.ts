import { CypressInputPage } from "./input.page";
import { SubmitButton } from "./submitButton.page";

export class LoadNamesPage{
    private _selector: string = "body > div > div.gameState > form";

    private _element: Cypress.Chainable<JQuery<HTMLElement>>;

    public get input1(): CypressInputPage {
        return new CypressInputPage(1);
    }

    public get input2() : CypressInputPage {
        return new CypressInputPage(2);
    }

    public get submitButton() : SubmitButton {
        return new SubmitButton();
    }

    public constructor() {
        this._element = cy.get(this._selector);
    }
}