import React from 'react'
import { render } from 'react-dom'
import ReactDemo from 'react-component-cli-demo'
import 'react-component-cli-demo/lib/main.min.css'
// import ReactDemo from '../../src' // 引入组件

const App = () => <ReactDemo />
render(<App />, document.getElementById('root'))