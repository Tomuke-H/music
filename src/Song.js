import React from 'react'
import { Button, Card } from 'semantic-ui-react';
import styled from 'styled-components';
import { Appear, CardContainer } from './CardContainer';
import { BackgroundColor } from './query';
import SongForm from './SongForm';

class Song extends React.Component {
    state = {
        editForm: false
    }

    editFormToggle = () => {
        this.setState({
            editForm: !this.state.editForm
        })
    }
    
    render() {
        if(this.state.editForm){
            return (
                <SongForm editFormToggle={this.editFormToggle} song={this.props.song} updateSong={this.props.updateSong}/>   
            )
        }
        return (
            <Card as={MyCard}>
                <Card.Content>
                    <Card.Header>
                        {this.props.song.title}
                    </Card.Header>
                    <Card.Meta>
                        {this.props.song.artist}
                    </Card.Meta>
                </Card.Content>
                <Card.Content>
                    <div className="ui two buttons">
                        <Button 
                            color="teal"
                            onClick={this.editFormToggle}
                        >
                            Edit
                        </Button>
                        <Button 
                            onClick={() => this.props.deleteSong(this.props.song.id)}
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

const MyCard = styled.div`
    height: 270px;
    animation: ${Appear} 1s;

    &:hover {
        background-color: ${BackgroundColor} !important;
    }
`

export default Song;