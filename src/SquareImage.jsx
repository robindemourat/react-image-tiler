import React from 'react'

export default class SquareImage extends React.Component {
  static get propTypes() {
    return {
      backgroundImage: React.PropTypes.string.isRequired,
      minWidth: React.PropTypes.number,
    }
  }

  static get defaultProps() {
    return {
      minWidth: 200,
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      height: 0,
      width: 0,
      backgroundImage: `url(${props.backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      float: 'left',
      display: 'inline-block',
    }
  }

  componentDidMount() {
    this.resize()()
    window.addEventListener('resize', this.resize())
  }

  componentWillUnmount() {
    window.removeEventLisener('resize', this.resize())
  }

  modifyState(newState) {
    this.setState(Object.assign({}, this.state, newState))
  }

  resize() {
    return () => this.modifyState({
      height: window.innerWidth / Math.floor(window.innerWidth / this.props.minWidth),
      width: window.innerWidth / Math.floor(window.innerWidth / this.props.minWidth),
    })
  }

  render() {
    const ref = (r) => {
      this.node = r
    }

    return (<div
        ref={ref}
        style={this.state}
    />)
  }

}
