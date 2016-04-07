import React from 'react'
import ReactDOM from 'react-dom'
import Tiler from '../src/tiler.js'
import InstagramFeed from '../src/instagram.js'

class InstagramApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = { images: [] }

        var YOUR_USER_ID = '',
            YOUR_CLIENT_ID = '',
            instagram = new InstagramFeed(YOUR_USER_ID, YOUR_CLIENT_ID)

        instagram.recent().then((feed) => this.setState({
            images: feed.data.map((item) => item.images.standard_resolution.url)
        }))
    }

    render() {
        return <Tiler images={ this.state.images }/>
    }
}

class PlaceKittenApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                'http://placekitten.com/200/300',
                'http://placekitten.com/300/300',
                'http://placekitten.com/400/300',
                'http://placekitten.com/500/300',
                'http://placekitten.com/200/200',
                'http://placekitten.com/500/500',
                'http://placekitten.com/600/400',
                'http://placekitten.com/700/300',
            ]
        }
    }

    render() {
        return <Tiler images={ this.state.images } minWidth="200"/>
    }
}

ReactDOM.render(<PlaceKittenApp />, document.getElementById('kittens-app'))
