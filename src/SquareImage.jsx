import React from 'react'

export default class SquareImage extends React.Component {
  static get propTypes() {
    return {
      backgroundImage: React.PropTypes.string.isRequired,
      minWidth: React.PropTypes.number,
      maxWidth: React.PropTypes.number,
      parentWidth: React.PropTypes.func,
    }
  }

  static get defaultProps() {
    return {
      minWidth: 100,
      maxWidth: 500,
      parentWidth: () => window.innerWidth,
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
    const cap = (min, a, max) => Math.min(Math.max(min, a), max)
    const width = () => (
      cap(
        this.props.minWidth,
        this.props.parentWidth() / Math.floor(this.props.parentWidth() / this.props.minWidth),
        this.props.maxWidth
      )
    )

    return () => {
      this.modifyState({
        height: width(),
        width: width(),
      })
    }
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
