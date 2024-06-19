export class SubmitButton {
    private _selector: string = "button";
    private _element: Cypress.Chainable<JQuery<HTMLElement>>;

    public constructor(){
        this._element = cy.get(this._selector);
    }

    public click(){
        this._element.click();
    }
}