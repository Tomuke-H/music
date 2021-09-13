import React, { useState } from 'react'
import { Button, Card, Form } from 'semantic-ui-react';

const SongFormFunc = ({song, updateSong, addSong, setEditForm}) => {
    const [id, setId] = useState(song ? song.id : undefined)
    const [title, setTitle] = useState(song ? song.title : '')
    const [artist, setArtist] = useState(song ? song.artist : '')

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeArtist = (e) => {
        setArtist(e.target.value)
    }

    const handleSubmit = (e) => {
        if(song){
            updateSong({id, title, artist})
            setEditForm(false)
        } else {
            addSong({id: Math.random(), title, artist})
            setTitle('')
            setArtist('')
        }
    }

    
    return (
        <Card>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Title</label>
                    <input 
                        value={title} 
                        placeholder="Title"
                        onChange={handleChangeTitle}
                        />
                </Form.Field>
                <Form.Field>
                    <label>Artist</label>
                    <input 
                        value={artist} 
                        placeholder="Artist"
                        onChange={handleChangeArtist}
                        />
                </Form.Field>
                <div className="ui two buttons">
                    <Button color="blue" type="submit">{song ? "Update" : "Add"}</Button>
                    {song && <Button color="orange" onClick={setEditForm}>Cancel</Button>}
                </div>
            </Form>
        </Card>
    )
    
}

export default SongFormFunc;