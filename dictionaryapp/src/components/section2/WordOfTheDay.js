import React from 'react'
import axios from 'axios'
import wordArray from './wordArray'

class WordOfTheDay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Rand: wordArray,
      Word: wordArray[Math.floor(Math.random() * wordArray.length)],
      dictData: [],
      date: new Date()
    }
  }

  dictApiCall = async (word) => {
    const dictUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=097cb478-2f07-4d94-9e03-739c1ff1d6ab`
    const dictResponse = await axios.get(dictUrl)
    const dictData = dictResponse.data.map( (d, i) => {
      const data = {
        word: d.hwi.hw,
        sense: d.fl,
        def: d.shortdef
      }
      return data
    })
    this.setState({
      dictData: dictData
    })
  }

  timerId() {

    setInterval( () => this.tick(), 1000)
  }

  tick() {
    this.setState({
      date: new Date()
    }, this.reset())
  }

  reset() {
    if (this.state.date.getSeconds() === 0) {
      const word = wordArray[Math.floor(Math.random() * wordArray.length)]
      console.log(word)
      this.dictApiCall(word)
    }
  }

  componentDidMount() {
    this.dictApiCall(this.state.Word)
    this.timerId()
  }

  componentWillUnmount() {
    clearInterval(this.TimerId)
  }


  render() {
    let wordData = this.state.dictData.map((d,i) => {
      return (
        <>
          <div className='word1'>
            <h1>{d.word} </h1>
          </div>
          <div className='sense1'>
            <h2>({d.sense})</h2>
          </div>
          <div className='def1'>
            <ul>{d.def.map((def, ind) => {
              return (
                <li key={ind}>{def}</li>
              )
            })}</ul>
          </div>
        </>
      )
    })
    return (
      <>
      <div className='header2'>
        <h1>Word of the hour</h1>
      </div>
      <div className='timer'>
        {this.state.date.toLocaleTimeString()}
      </div>
        {wordData[0]}
      </>
    )
  }
}

export default WordOfTheDay
