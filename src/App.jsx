import React from 'react'
import Folder from './Folder'
import { files } from './data'
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <h1>Vs Code Folder Structure</h1>
      <Folder files={files}/>

    </div>
  )
}

export default App