import React from 'react'
import { Button, Form } from 'semantic-ui-react';

class SongForm extends React.Component {
    state = {
        title: '',
        artist: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.addSong({id: Math.random(), title: this.state.title, artist: this.state.artist})
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
                <Button type="submit">Add</Button>
            </Form>
        )
    }
}

export default SongForm;