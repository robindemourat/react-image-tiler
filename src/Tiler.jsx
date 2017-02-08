import React from 'react'
import SquareImage from './SquareImage'

class Tiler extends React.Component {
  static get propTypes() {
    return {
      images: React.PropTypes.arrayOf(React.PropTypes.string),
      minWidth: React.PropTypes.number,
    }
  }

  static get defaultProps() {
    return {
      images: [],
      minWidth: 200,
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      images: props.images,
    }
  }

  render() {
    const containerStyle = {
      margin: 0,
      padding: 0,
    }

    const endTile = {
      clear: 'both',
      float: 'none',
      display: 'block',
    }

    const items = this.props.images.map((n, i) =>
        <SquareImage backgroundImage={n} minWidth={this.props.minWidth} key={i} /> // eslint-disable-line react/no-array-index-key
    )

    return <div style={containerStyle}>{items}<div style={endTile} /></div>
  }
}

export default Tiler
