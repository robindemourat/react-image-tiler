require('./tiler.css')

import React from 'react'
import ReactDOM from 'react-dom'
import SquareImage from './image.jsx'

class Tiler extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: props.images
        }
    }

    render() {
        const items = this.props.images.map((n, i) => {
            return <SquareImage backgroundImage={n} minWidth={this.props.minWidth} key={i} />
        })

        return <div className="tiler-image-container">{ items }<div className="end"></div></div>
    }
}

Tiler.defaultProps = { images: [], minWidth: 200 }

export default Tiler
