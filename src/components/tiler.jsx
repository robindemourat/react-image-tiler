require('./tiler.less')

import React from 'react'
import ReactDOM from 'react-dom'
import Dimensions from 'react-dimensions'
import ProportionalImage from './image.jsx'

class Tiler extends React.Component {
    render() {
        const items = [1,2,3,4,5,7,8,9,10].map((n, i) => {
            return <ProportionalImage parentWidth={this.node ? this.node.clientWidth : undefined} key={n} index={n} />
        })

        return <div className="image-container" ref={(r) => this.node = r}>{ items }</div>
    }
}

export default Tiler
