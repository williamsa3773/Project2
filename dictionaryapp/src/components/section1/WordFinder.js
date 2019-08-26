import React from 'react'
import Form from  './Form'

class WordFinder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      word: this.props.word
    }
  }

  dictApiCall = async () => {
    console.log(this.state.word)
    const dictUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.state.word}?key=097cb478-2f07-4d94-9e03-739c1ff1d6ab`
  }

  handleSubmit = (e) => {
    this.setState = (prevState => ({
      word: this.props.word
    }))

  }

  render() {
    console.log(this.props)
    return (
      <Form onSubmit={this.onSubmit}/>
    )
  }
}

export default WordFinder
