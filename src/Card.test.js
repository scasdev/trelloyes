import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';
import STORE from './store.js';


describe('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card
        key={STORE.allCards.id}
        title={STORE.allCards.title}
        content={STORE.allCards.content}
      >                  
      </Card>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});

