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
        <Link to='/finder'>Searching</Link>
        <Link to='/random'>Special</Link>
        <Link to='/unscramble'>Underconstruction</Link>
      </div>
      <Switch>
        <Route path='/finder' component={WordFinder} />
        <Route path='/random' component={SpecialWords} />
        <Route path='/unscramble' component={WordGames} />
      </Switch>
      <footer>
        <div className='footer'>
          <p>temporary text here</p>
        </div>
      </footer>
    </div>
  )
}

export default App
