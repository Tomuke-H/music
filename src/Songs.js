import React from 'react'
import { Card } from 'semantic-ui-react'
import styled, { keyframes } from 'styled-components'
import Song from './Song'
import SongForm from './SongForm'

class Songs extends React.Component {
    state = {
        songs: [
            {id: 1, title: 'Typical', artist: 'MuteMath'},
            {id: 2, title: 'Everything is Alright', artist: 'Motion City Soundtrack'},
            {id: 3, title: 'Cinema', artist: 'Benny Benassi'},
            {id: 4, title: 'We Own the Night', artist: 'Dance Gavin Dance'},
            {id: 5, title: 'Attractive Today', artist: 'Motion City Soundtrack'},
        ]
    }
    
    
    addSong = (song) => {
        this.setState({
            songs: [song, ...this.state.songs]
        })
    }
    
    deleteSong = (id) => {
        let updatedSongs = this.state.songs.filter(s => s.id !== id)
        this.setState({
            songs: updatedSongs
        })
    }
    
    updateSong = (song) => {
        let updatedSongs = this.state.songs.map(s => s.id === song.id ? song : s)
        this.setState({
            songs: updatedSongs
        })
    }

    renderSongs = () => {
        return this.state.songs.map(s => {
            return(
                <Song updateSong={this.updateSong} deleteSong={this.deleteSong} key={s.id} song={s} />
            )
        })
    }

    componentDidMount() {
        console.log('inuendo?')
    }
    
    componentWillUnmount() {
        console.log('still sounds like inuendo')
    }

    componentDidUpdate() {
        console.log('oh we updated alright')
    }

    render() {
        return (
            <div>
                <MyTitle>The App with Class</MyTitle>
                <SongForm addSong={this.addSong}/>
                <MyTitle>Songs</MyTitle>
                <Card.Group>
                    {this.renderSongs()}
                </Card.Group>
            </div>
        )
    }
}

const SlideIn = keyframes`
    from {
        margin-left: 600px;
        opacity: 0%
    }

    to {
        margin-left: 0%
        opacity: 100%
    }
`
const MyTitle = styled.h1`
    animation: ${SlideIn} 1.5s
`


export default Songs;