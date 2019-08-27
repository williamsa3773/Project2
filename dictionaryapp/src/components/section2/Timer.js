import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 10}
  }

  decreaseTime = () => {
    this.setState(prevState => ({
      count: prevState.count -1
    }), () => this.reset())}

  tick() {
    setInterval(this.decreaseTime, 1000)
  }

  componentDidMount() {
    this.tick()
  }

  reset() {
    if(this.state.count === -1) {
      this.setState({
        count: 10
      })
    }
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
