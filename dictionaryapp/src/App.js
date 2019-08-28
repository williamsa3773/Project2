import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import './App.css'
import WordFinder from './components/section1/WordFinder'
import SpecialWords from './components/section2/SpecialWords'
import WordGames from './components/section3/WordGames'

function App() {
  return (
    <div className='App'>
      <div className='nav'>
        <Link to='/finder'>Word Search</Link>
        <Link to='/random'>Temporary Text</Link>
        <Link to='/unscramble'>Scramble</Link>
        <Switch>
          <Route path='/finder' component={WordFinder} />
          <Route path='/random' component={SpecialWords} />
          <Route path='/unscramble' component={WordGames} />
        </Switch>
      </div>
    </div>
  )
}

export default App
