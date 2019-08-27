import React from 'react'
import axios from 'axios'
import Timer from './Timer'
import wordArray from './wordArray'

class WordOfTheDay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Rand: wordArray,
      Word: wordArray[Math.floor(Math.random() * wordArray.length)],
      dictData: []
    }
  }

  dictApiCall = async () => {
    const dictUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.state.Word}?key=097cb478-2f07-4d94-9e03-739c1ff1d6ab`
    console.log(dictUrl)
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

  componentDidMount() {
    this.dictApiCall()
  }

  render() {
    let wordData = this.state.dictData.map((d,i) => {
      return (
        <div>
          <div className='title'>
            <div className='word'>
              <h1>{d.word} </h1>
            </div>
            <div className='sense'>
              <h2>({d.sense})</h2>
            </div>
          </div>
          <div className='def'>
            <ul>{d.def.map((def, ind) => {
              return (
                <li key={ind}>{def}</li>
              )
            })}</ul>
          </div>
        </div>
      )
    })
  
    return (
      <div>
        <Timer />
        {wordData}
      </div>
    )
  }
}

export default WordOfTheDay
