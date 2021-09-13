import React from 'react'
import { Button, Card } from 'semantic-ui-react';

class Song extends React.Component {
    
    render() {
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
                        <Button color="teal">
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