'use strict';

import React from 'react';
import { render } from 'react-dom';
import Greet from './components/Greet';

window.React = React;

render(
  <Greet />,
  document.getElementById('react-root')
);
