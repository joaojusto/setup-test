import React from 'react';
import renderer from 'react-test-renderer';

import Button from './button';

it('renders correctly', () => {
  const tree = renderer.create(
    <Button onClick={() => console.log('Clicked')}>A button</Button>
  ).toJSON();

  expect(tree).toMatchSnapshot();
})
