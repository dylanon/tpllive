import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

// Global Styles
import '../index.css';

// BrowserInfo
import BrowserInfo from '../components/BrowserInfo';
import chrome from '../assets/chrome.svg';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('BrowserInfo', module)
  .add('with 0.1%', () => <BrowserInfo name='Chrome' logo={chrome} percentage={0.1} />)
  .add('with 50%', () => <BrowserInfo name='Chrome' logo={chrome} percentage={50} />)
  .add('with 100%', () => <BrowserInfo name='Chrome' logo={chrome} percentage={100} />)
  .add('with 150%', () => <BrowserInfo name='Chrome' logo={chrome} percentage={150} />)
  .add('with long name', () => <BrowserInfo name='Google Chrome Web Browser' logo={chrome} percentage={25} />);
