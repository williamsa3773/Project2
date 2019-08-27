import React from 'react'
import axios from 'axios'
import Form from  './Form'

class WordFinder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      word: 'Software',
      dictData: [],
      thesData: []
    }
  }

  dictApiCall = async () => {
    const dictUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.state.word}?key=097cb478-2f07-4d94-9e03-739c1ff1d6ab`
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

  thesApiCall = async () => {
    const thesUrl = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${this.state.word}?key=a9a12465-41f6-45eb-8960-4783f16d1b54`
    const thesResponse = await axios.get(thesUrl)
    console.log(thesResponse)
    const thesData = thesResponse.data.map( (def, ind) => {
      const data = {
        ant: def.ants,
        syn: def.syns
      }
      return data
    })
    this.setState({
      thesData: thesData
    })

  }

  componentDidMount() {
    this.dictApiCall()
    this.thesApiCall()
  }
  handleSubmit = (word) => {
    this.setState(prevState => ({
      word: word
    }), () => this.dictApiCall())
  }

  render() {
    let list = () => {
      console.log('this is this inside of list', this)
      if(!this.state.dictData.length) {
        return (
        <p>Currently proccessing data</p>
      )
    }
      this.state.dictData.map( (d,i) => {
        return d.def.map( (def,ind) => {
          return <li key={ind}>{def}</li>})})}
    return (
      <div className='finder'>
        <div className='form'>
          <Form onSubmit={this.handleSubmit}/>
        </div>
        <div className='data'>
          <div className='title'>
            <div className='word1'>
              <h1>{this.state.dictData.word}</h1>
            </div>
            <div className='sense1'>
              <h2> {this.state.dictData.sense}</h2>
            </div>
          </div>
          <div className='def1'>
            {list()}
          </div>
        </div>
      </div>
    )
  }
}

export default WordFinder
