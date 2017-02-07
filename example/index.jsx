import React from 'react'
import ReactDOM from 'react-dom'
import Tiler from '../src/Tiler'
import InstagramFeed from './instagram.js'

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
              'https://placehold.it/200x200',
              'https://placehold.it/300x300',
              'https://placehold.it/400x400',
              'https://placehold.it/500x500',
              'https://placehold.it/600x600',
              'https://placehold.it/600x600',
              'https://placehold.it/600x600',
              'https://placehold.it/600x600',
              'https://placehold.it/600x600',
              'https://placehold.it/600x600',
            ]
        }
    }

    render() {
        return <Tiler images={ this.state.images } minWidth="200"/>
    }
}

ReactDOM.render(<PlaceKittenApp />, document.getElementById('kittens-app'))
