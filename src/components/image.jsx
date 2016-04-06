import React from 'react'
import ReactDOM from 'react-dom'

const Unset = 2e8

function shouldBreak(i: number, componentWidth: number, width: number, minCols: number) {
    // If the width of this component surpasses the side of the screen, wrap it
    // If the width of the component <= the min size, wrap it if i > minCols

    return componentWidth < 300 && i % minCols == 0
    // console.log(i % minCols)
    console.log((i + 1) % minCols)
    // return (i + 1) % minCols == 0
    // if (i < 1) {
    //     return false
    // }
    // // console.log(i, componentWidth, width, minCols, componentWidth * i > width && i > minCols)
    // return componentWidth * i > width && i > minCols && !shouldBreak(i - 1, componentWidth, width, minCols)
}

class ProportionalImage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            height: Unset
        }
    }

    render() {
        return <div
            ref={(r) => this.node = r}
            style={ this.state }>Hiee</div>
    }

    resize() {
        return (event) => this.setState({
            height: window.innerWidth / this.props.minCols,
            width: window.innerWidth / this.props.minCols
        })
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.resize()()
        window.addEventListener('resize', this.resize())
    }

    componentWillUnmount() {
        window.removeEventLisener('resize', this.resize())
    }
}

ProportionalImage.defaultProps = { minCols: 3, index: 1, minWidth: 300, maxWidth: 400 }

export default ProportionalImage
