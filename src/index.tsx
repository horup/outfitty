import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import {Avatar} from './Avatar';
import { Container } from '@material-ui/core';
import { Settings } from './Settings';
import { useObservable, useObserver } from 'mobx-react-lite';

export interface IState
{
  shirtColor:string;
}

const App = ()=>
{
  const state = useObservable<IState>({
    shirtColor:'#FF0000'
  });


  return (<Container>
        <div className="container">
          <div className="avatar">
            {useObserver(()=><Avatar shirtColor={state.shirtColor}/>)}
          </div>
          <div className="settings">
            <Settings state={state}/>
          </div>
        </div>
    </Container>)
}
 
ReactDOM.render(<App />, document.getElementById("app"));