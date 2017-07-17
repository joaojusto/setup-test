import React, { Component } from 'react';
import { storiesOf, action } from '@storybook/react';

import Button from './button';

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('clicked')}>A button</Button>);
