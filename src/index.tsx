import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import {Avatar} from './Avatar';
import { Container } from '@material-ui/core';
 
function App() {
  return (
    <Container>
      <div style={{display:'flex'}}>
        <div>
          <Avatar/>
        </div>
        <div style={{width:'256px'}}>
          <Avatar/>
        </div>
      </div>
    </Container>
  );
}
 
ReactDOM.render(<App />, document.getElementById("app"));