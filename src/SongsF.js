import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'
import SongF from './SongF'
import SongFormF from './SongFormF'

const songList = [
    {id: 1, title: 'Typical', artist: 'MuteMath'},
    {id: 2, title: 'Everything is Alright', artist: 'Motion City Soundtrack'},
    {id: 3, title: 'Cinema', artist: 'Benny Benassi'},
    {id: 4, title: 'We Own the Night', artist: 'Dance Gavin Dance'},
    {id: 5, title: 'Attractive Today', artist: 'Motion City Soundtrack'},
]
const SongsF = () => {
    const [songs, setSongs] = useState(songList)
    
    
    const addSong = (song) => {
       setSongs([song, ...songs])
    }
    
    const deleteSong = (id) => {
        let updatedSongs = songs.filter(s => s.id !== id)
        setSongs(updatedSongs)
    }
    
    const updateSong = (song) => {
        let updatedSongs = songs.map(s => s.id === song.id ? song : s)
        setSongs(updatedSongs)
    }

    const renderSongs = () => {
        return songs.map(s => {
            return(
                <SongF updateSong={updateSong} deleteSong={deleteSong} key={s.id} song={s} />
            )
        })
    }


    return (
        <div>
            <h1>A Functional App</h1>
            <SongFormF addSong={addSong}/>
            <h1>Songs</h1>
            <Card.Group>
                {renderSongs()}
            </Card.Group>
        </div>
    )
    
}

export default SongsF;