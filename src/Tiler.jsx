import React from 'react'
import SquareImage from './SquareImage.jsx'

class Tiler extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: props.images
        }
    }

    render() {
        const containerStyle = {
          margin: 0,
          padding: 0
        }

        const endTile = {
          clear: 'both',
          float: 'none',
          display: 'block'
        }

        const items = this.props.images.map((n, i) => {
            return <SquareImage backgroundImage={n} minWidth={this.props.minWidth} key={i} />
        })

        return <div style={containerStyle}>{items}<div style={endTile}></div></div>
    }
}

Tiler.defaultProps = { images: [], minWidth: 200 }

export default Tiler
