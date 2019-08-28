import React from 'react'
import axios from 'axios'
import wordArray from './wordArray'

class RandomWord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Rand: wordArray,
      Word: [],
      dictData: []
    }
  }

  dictApiCall = async () => {
    const dictUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.state.Word}?key=097cb478-2f07-4d94-9e03-739c1ff1d6ab`
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

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      Word: wordArray[Math.floor(Math.random() * wordArray.length)]
    }), () => this.dictApiCall())
  }

  render() {
    let wordData = this.state.dictData.map((d,i) => {
      return (
        <div className='container'>
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
      <div className='finder'>
        <form onSubmit={this.handleSubmit}>
          <input
          type='submit'
          value='Randomizing'
          />
        </form>
        <div>
          {wordData}
        </div>
      </div>
    )
  }
}

export default RandomWord
