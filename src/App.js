import './App.css';
import React from 'react';
import Songs from './Songs';
import SongForm from './SongForm';
import { Button } from 'semantic-ui-react';
import SongsF from './SongsF';

class App extends React.Component {
  state = {
    classBased: false
  }

  render() {
    if(this.state.classBased){

      return (
        <div>
          <Button onClick={()=>this.setState({classBased: !this.state.classBased})}>
            Switch to Functional
          </Button>
          <Songs />
        </div>
      )
    } else {
      return (
        <div>
          <Button onClick={()=>this.setState({classBased: !this.state.classBased})}>
            Switch to Class Based
          </Button>
          <SongsF />
        </div>
      )
    }
  }
}

export default App;
