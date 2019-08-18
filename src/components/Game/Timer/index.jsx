import React, {Component} from 'react'
import CustomProgressBar from './progressBar'; 
import '../../../styles/Game/Timer.css'

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 10
    }
  }

  render() {
    const {count} = this.state;
    if (count === -1) {
      this.setState({count: 10})
    }
    return (
      <div className="container container-timer">
        <div className="row">
          <div className="col-2">
          <div className="title-turn">Turn: {this.props.piece_current}</div>
          </div>
          <div className="col-8">
            <CustomProgressBar percentage = {this.state.count*10}/>
          </div>

          <div className="col-2">
            <div className="timer">
              {count}
            </div>
          </div>
      </div>

      </div>
    );
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

export default Timer;