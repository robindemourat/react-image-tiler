import React from 'react'

export default class SquareImage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            height: 0,
            width: 0,
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            float: 'left',
            display: 'inline-block'
        }
    }

    render() {
        return <div
            ref={(r) => this.node = r}
            style={ this.state }></div>
    }

    resize() {
        return (event) => this.modifyState({
            height: window.innerWidth / Math.floor(window.innerWidth / this.props.minWidth),
            width: window.innerWidth / Math.floor(window.innerWidth / this.props.minWidth)
        })
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
}

SquareImage.defaultProps = {
    minWidth: 200
}
