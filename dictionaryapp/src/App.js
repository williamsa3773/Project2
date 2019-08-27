import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import './App.css'
import WordFinder from './components/section1/WordFinder'
import SpecialWords from './components/section2/SpecialWords'

function App() {
  return (
    <div className='App'>
      <div className='nav'>
        <Link to='/finder'>Word Search</Link>
        <Link to='/random'>Temporary Text</Link>
        <Switch>
          <Route path='/finder' component={WordFinder} />
          <Route path='/random' component={SpecialWords} />
        </Switch>
      </div>
    </div>
  )
}

export default App
