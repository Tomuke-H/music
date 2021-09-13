import React from 'react'
import { Card } from 'semantic-ui-react'
import Song from './Song'

class Songs extends React.Component {
    renderSongs = () => {
        console.log(this.props.songs)
        return this.props.songs.map(s => {
            return(
                <Song key={s.id} song={s} />
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Songs</h1>
                <Card.Group>
                    {this.renderSongs()}
                </Card.Group>
            </div>
        )
    }
}

export default Songs;