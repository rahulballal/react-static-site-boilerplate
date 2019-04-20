import React from 'react'
import { hydrate } from 'react-dom'
import { ButtonBase } from './components/button'

const App = () => <div><ButtonBase>Hello World</ButtonBase></div>

hydrate(<App />, document.querySelector('#app'))
