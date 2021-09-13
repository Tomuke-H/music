import './App.css';
import React from 'react';
import Songs from './Songs';
import { Button } from 'semantic-ui-react';
import SongsFunc from './SongsFunc';

class App extends React.Component {
  state = {
    classBased: false
  }

  render() {
    if(this.state.classBased){
      return (
        <div>
          <Button onClick={()=>this.setState({classBased: !this.state.classBased})}>
            Switch to Class Based
          </Button>
          <SongsFunc />
        </div>
      )
    } else {
      return (
        <div>
          <Button onClick={()=>this.setState({classBased: !this.state.classBased})}>
            Switch to Functional
          </Button>
          <Songs />
        </div>
      )
    }
  }
}

export default App;
