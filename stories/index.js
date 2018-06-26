import React from 'react'
import { storiesOf } from '@storybook/react'
import './styles.css'

import Playground from './Playground'
import Demo from './Demo'

storiesOf('Stories', module)
  .add('Playground', () => <Playground />)
  .add('Demo', () => <Demo />)
