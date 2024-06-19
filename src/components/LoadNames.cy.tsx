//import CypressInputPage from '../../testing/LoadNames/input.page';
import LoadNames from './LoadNames'
//import CypressInputPage from '../../testing/LoadNames/input.page';

describe('<LoadNames />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LoadNames />);
    // var inputPage = new CypressInputPage(1);
    // inputPage.enterText("James");
    // inputPage.hasValue("James");
  })
})