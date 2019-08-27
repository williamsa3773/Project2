import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 50}
  }

  decreaseTime = () => {
    this.setState(prevState => ({
      count: prevState.count -1
    }))}

  tick() {
  setInterval(this.decreaseTime, 1000)
  }

  componentDidMount() {
    this.tick()
  }


  render() {
    return (
      <div className='timer'>
        {this.state.count}
      </div>
    )
  }
}

export default Timer
