import React from 'react'
import WordOfTheDay from './WordOfTheDay'
import RandomWord from './RandomWord'

class SpecialWord extends React.Component {
  render() {
    return (
      <div>
        <WordOfTheDay />
        <RandomWord />
      </div>
    )
  }
}

export default SpecialWord
