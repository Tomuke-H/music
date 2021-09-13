import './App.css';
import React from 'react';
import Songs from './Songs';
import SongForm from './SongForm';

class App extends React.Component {
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

  render() {
    return (
      <div>
        <h1>App</h1>
        <SongForm addSong={this.addSong}/>
        <Songs updateSong={this.updateSong} deleteSong={this.deleteSong} songs={this.state.songs}/>
      </div>
    )
  }
}

export default App;
