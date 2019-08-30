import React from 'react'
import {Link, Route, Switch, Redirect} from 'react-router-dom'
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
      </div>
      <Switch>
        <Route path='/finder' component={WordFinder} />
        <Route path='/random' component={SpecialWords} />
        <Redirect from="/" to="/finder" />
      </Switch>
      <footer>
        <div className='footer'>
          <h1>Created by Andre Williams</h1>
        </div>
          <div className='link'>
            <a href='https://github.com/williamsa3773'>GitHub</a>
            <a href='https://www.linkedin.com/in/andre-williams-37272118b/'>LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

export default App
