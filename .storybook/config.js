import React from 'react'
import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import '../src/styles/index.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../src/', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withInfo({
  inline: true
}))
addDecorator(withKnobs);
addDecorator(checkA11y);
addDecorator(storyFn => <div style={{ padding: '30px' }}>{storyFn()}</div>);

configure(loadStories, module);
