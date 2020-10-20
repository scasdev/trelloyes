import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from './store.js';


describe('List component', () => {
  it('renders without crashing', () => {
    let passedInCards = [];
    const div = document.createElement('div');
    ReactDOM.render(<List cards={passedInCards} />, div)
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    let passedInCards = [];
    const tree = renderer
      .create(<List
        key={STORE.lists.id}
        title={STORE.lists.header}
        cards={passedInCards}
      >                  
      </List>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});
