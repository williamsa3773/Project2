import React from 'react'
import axios from 'axios'
import './App.css'
import WordFinder from './components/section1/WordFinder'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      word: 'software',
      wordData: []
    }
  }

  dictApiCall = async () => {
    let dictUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.state.word}?key=097cb478-2f07-4d94-9e03-739c1ff1d6ab`
    console.log(dictUrl)
  }

  componentDidMount(){
    this.dictApiCall()
  }

  handleChange = (e) => {
    console.log('input', e.target.value)
    let word = e.target.value
    this.setState(prevState => ({
      word: word
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.word)
  }

  render() {
    return (
      <div className='App'>
      <form onSubmit={this.handleSubmit}>
        <input
        placeholder="search for a word"
        type='text'
        onChange={this.handleChange}
        />
        <input
        type='submit'
        value='Computing'
        />
      </form>
        <p>The begginng of my project</p>
        <WordFinder />
      </div>
    )
  }
}

export default App
