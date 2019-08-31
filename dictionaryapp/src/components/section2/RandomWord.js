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
    }}

  dictApiCall = async () => {
    let key = process.env.REACT_APP_DICT_API_KEY
    const dictUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.state.word}?key=${key}`
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
    })}

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      Word: wordArray[Math.floor(Math.random() * wordArray.length)]
    }), () => this.dictApiCall())}

  render() {
    let wordData = this.state.dictData.map((d,i) => {
      return (
       <>
         <div className='word2'>
           <h4>{d.word}</h4>
         </div>
         <div className='sense2'>
           <h3>({d.sense})</h3>
         </div>
         <div className='def2'>
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
        <div className='header3'>
          <h2>Random Word</h2>
        </div>
        <div className='form1'>
          <form onSubmit={this.handleSubmit}>
            <input
            type='submit'
            value='Randomizing'
            />
          </form>
        </div>
        {wordData[0]}
      </>
    )}}

export default RandomWord
