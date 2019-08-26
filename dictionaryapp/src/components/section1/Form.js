import React from 'react'

function Form(props) {
  return (
    <form>
      <input
      placeholder="search for a word"
      type='text'
      onChange={props.handleChange}
      />
      <input
      type='submit'
      value='Computing'
      />
    </form>
  )
}
export default Form
