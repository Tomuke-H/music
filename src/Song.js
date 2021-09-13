import React from 'react'
import { Button, Card } from 'semantic-ui-react';
import SongForm from './SongForm';

class Song extends React.Component {
    state = {
        editForm: false
    }
    
    render() {
        if(this.state.editForm){
            return (
                <div>
                    <SongForm song={this.props.song} updateSong={this.props.updateSong}/>
                    <Button 
                        onClick={() => this.setState({editForm: !this.state.editForm})}
                    >
                        Cancel
                    </Button>
                </div>
            )
        }
        return (
            <Card>
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
                            onClick={() => this.setState({editForm: !this.state.editForm})}
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

export default Song;