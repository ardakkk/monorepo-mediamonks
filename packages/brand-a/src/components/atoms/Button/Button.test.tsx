import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from './component';

test('Button component should be render', () => {
  const component = renderer.create(<Button>Click me</Button>);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
