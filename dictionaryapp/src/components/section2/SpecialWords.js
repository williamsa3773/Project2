import React from 'react'
import WordOfTheDay from './WordOfTheDay'
import RandomWord from './RandomWord'

class SpecialWord extends React.Component {
  render() {
    return (
      <div className='section2'>
        <WordOfTheDay />
        <RandomWord />
      </div>
    )
  }
}

export default SpecialWord
