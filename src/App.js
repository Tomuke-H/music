import './App.css';
import React from 'react';
import Songs from './Songs';
import { Button } from 'semantic-ui-react';
import SongsFunc from './SongsFunc';
import styled from 'styled-components';
import { CrazyColor } from './query';

class App extends React.Component {
  state = {
    classBased: false
  }

  render() {
    if(this.state.classBased){
      return (
        <AppContainer>
          <Button onClick={()=>this.setState({classBased: !this.state.classBased})}>
            Switch to Class Based
          </Button>
          <div>
            <SongsFunc />
          </div>
        </AppContainer>
      )
    } else {
      return (
        <AppContainer>
          <Button onClick={()=>this.setState({classBased: !this.state.classBased})}>
            Switch to Functional
          </Button>
          <div>
            <Songs />
          </div>
        </AppContainer>
      )
    }
  }
}

const AppContainer = styled.div`
  padding:20px;
  height: 1400px;
  background: rgb(191,255,241);
  background: radial-gradient(circle, rgba(191,255,241,1) 0%, rgba(50,190,153,1) 100%);

  @media (max-width:600px) {
    background: ${CrazyColor} !important;
  }
`

export default App;
