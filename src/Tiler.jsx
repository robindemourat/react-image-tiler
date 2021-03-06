import React from 'react'
import SquareImage from './SquareImage'

export default class Tiler extends React.Component {
  static get propTypes() {
    return {
      images: React.PropTypes.arrayOf(React.PropTypes.string),
      minWidth: React.PropTypes.number,
      maxWidth: React.PropTypes.number,
    }
  }

  static get defaultProps() {
    return {
      images: [],
      minWidth: 500,
      maxWidth: Infinity,
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

    const ref = (r) => {
      this.node = r
    }

    const parentWidth = () => (
      this.node ? this.node.clientWidth : window.innerWidth
    )

    const items = this.props.images.map((n, i) =>
        <SquareImage
            backgroundImage={n}
            parentWidth={parentWidth}
            maxWidth={this.props.maxWidth}
            minWidth={this.props.minWidth}
            key={i} // eslint-disable-line react/no-array-index-key
        />
    )

    return <div ref={ref} style={containerStyle}>{items}<div style={endTile} /></div>
  }

}
