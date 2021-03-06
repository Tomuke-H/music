import React, { useState } from 'react'
import { Button, Card } from 'semantic-ui-react';
import SongFormFunc from './SongFormFunc';

const SongFunc = ({song, updateSong, deleteSong}) => {
    const [editForm, setEditForm] = useState(false)
    
    
    if(editForm){
        return (
            <div>
                <Card>
                    <SongFormFunc setEditForm={setEditForm} song={song} updateSong={updateSong}/>
                </Card>
            </div>
        )
    } else {

        return (
            <Card>
            <Card.Content>
                <Card.Header>
                    {song.title}
                </Card.Header>
                <Card.Meta>
                    {song.artist}
                </Card.Meta>
            </Card.Content>
            <Card.Content>
                <div className="ui two buttons">
                    <Button 
                        color="teal"
                        onClick={() => setEditForm(!editForm)}
                        >
                        Edit
                    </Button>
                    <Button 
                        onClick={() => deleteSong(song.id)}
                        color="orange"
                        >
                        Delete
                    </Button>
                </div>
            </Card.Content>
        </Card>
        )
    }
}

export default SongFunc;