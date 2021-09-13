import React from 'react'
import { Button, Form } from 'semantic-ui-react';

class SongForm extends React.Component {
    state = {
        id: this.props.song ? this.props.song.id : undefined,
        title: this.props.song ? this.props.song.title : '',
        artist: this.props.song ? this.props.song.artist : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        if(this.props.song){
            this.props.updateSong({...this.state})
            this.props.editFormToggle()
        } else {
            this.props.addSong({id: Math.random(), title: this.state.title, artist: this.state.artist})
            this.setState({
                title: '',
                artist: ''
            })
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Title</label>
                    <input 
                        name={"title"}
                        value={this.state.title} 
                        placeholder="Title"
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Artist</label>
                    <input 
                        name={"artist"}
                        value={this.state.artist} 
                        placeholder="Artist"
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Button type="submit">{this.props.song ? "Update" : "Add"}</Button>
            </Form>
        )
    }
}

export default SongForm;