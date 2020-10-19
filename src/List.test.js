import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from './store.js';


describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    let passedInCards = [];
    ReactDOM.render(<List cards={passedInCards} />, div)
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List
        key={STORE.lists.id}
        title={STORE.lists.header}
        content={STORE.allCards.cards}
      >                  
      </List>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});
