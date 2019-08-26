import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      word: 'Software'
    }
  }
  handleChange = (e) => {
    let word = e.target.value
    this.setState(prevState => ({
      word: word
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.word)
  }
  render() {
    return (
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
    )
  }
}
export default Form
