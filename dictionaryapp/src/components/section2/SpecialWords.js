import React from 'react'
import WordOfTheDay from './WordOfTheDay'
import RandomWord from './RandomWord'
import Section2 from './Section2.css'

class SpecialWord extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='section2'>
          <div className='header1'>
            <h1>Special Words</h1>
          </div>
          <WordOfTheDay />
          <RandomWord />
        </div>
      </div>
    )
  }
}

export default SpecialWord
