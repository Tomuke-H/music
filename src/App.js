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
        <div style={{margin: "20px"}}>
          <Button onClick={()=>this.setState({classBased: !this.state.classBased})}>
            Switch to Class Based
          </Button>
          <div style={{margin: "20px"}}>
            <SongsFunc />
          </div>
        </div>
      )
    } else {
      return (
        <div style={{margin: "20px"}}>
          <Button onClick={()=>this.setState({classBased: !this.state.classBased})}>
            Switch to Functional
          </Button>
          <div style={{margin: "20px"}}>
            <Songs />
          </div>
        </div>
      )
    }
  }
}

export default App;
