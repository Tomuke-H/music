import React from 'react'
import { Button, Card, Form } from 'semantic-ui-react';
import styled from 'styled-components';
import { CardContainer } from './CardContainer';
import { BackgroundColor, HighlightedBackground } from './query';

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
            <CardContainer>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                    
                        <label>Title</label>
                        <MyFormInput 
                            name={"title"}
                            value={this.state.title} 
                            placeholder="Title"
                            onChange={this.handleChange}
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>Artist</label>
                        <MyFormInput 
                            name={"artist"}
                            value={this.state.artist} 
                            placeholder="Artist"
                            onChange={this.handleChange}
                            />
                    </Form.Field>
                    <div className= "ui two buttons">
                        <Button color="blue" type="submit">{this.props.song ? "Update" : "Add"}</Button>
                        {this.props.song && <Button color="orange" onClick={this.props.editFormToggle}>Cancel</Button>}
                    </div>
                </Form>
            </CardContainer>
        )
    }
}

const MyFormInput = styled.input`
    &:hover {
        background-color: ${HighlightedBackground} !important;
    }
`

export default SongForm;