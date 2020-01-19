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
  pantsColor:string;
  blouseColor:string;
}

const App = ()=>
{
  const state = useObservable<IState>({
    shirtColor:'#9a6d26',
    pantsColor:'#9DAECD',
    blouseColor:'#101010'
  });


  return (<Container>
        <div className="container">
          <div className="avatar">
            {useObserver(()=><Avatar 
            shirtColor={state.shirtColor}
            pantsColor={state.pantsColor}
            blouseColor={state.blouseColor}/>)}
          </div>
          <div className="settings">
            <Settings state={state}/>
          </div>
        </div>
    </Container>)
}
 
ReactDOM.render(<App />, document.getElementById("app"));