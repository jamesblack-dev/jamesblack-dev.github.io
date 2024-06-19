export class CypressInputPage {
    private _selector: string;
    private _element: Cypress.Chainable<JQuery<HTMLElement>>;

    public constructor(inputVal: number) {
        this._selector = `:nth-child(${inputVal}) > input`;
        this._element = cy.get(this._selector);
    }

    private reAssignChainableHtmlElement() {
        this._element = cy.get(this._selector);
    }

    public enterText(text: string) {
        this.reAssignChainableHtmlElement()
        this._element.type(text);
    }

    public hasValue(value: string) {
        this.reAssignChainableHtmlElement();
        this._element.should("have.value", value);
    }
}