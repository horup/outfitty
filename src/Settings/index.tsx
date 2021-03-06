import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ColorPicker from 'material-ui-color-picker';
import { IState } from '..';
import { useObserver } from 'mobx-react-lite';
import { Typography, Card, CardContent } from '@material-ui/core';
import * as convert from 'color-convert';

const ColorChanger = ({color, text, onChange}:{color:string, text:string, onChange:(color:string)=>any})=>{
    return (
        <div style={{marginBottom:'16px'}}>
                    <Typography>{text}</Typography>
                    <ColorPicker
                        name='color'
                        hintText={color}
                        value = {color}
                        onChange={c => onChange(c)}
                    />
                </div>
    )
}

const ColorStatus = ({state}:{state:IState})=>
{
    const num = 3;
    const size = 50;
    let p = 200;
    
    return useObserver(()=>(
        <div>
           No colors yet..
        </div>
    ))
}

export const Settings = ({state}:{state:IState})=>
{
    return useObserver(()=>
        <form noValidate autoComplete="off">
            <ColorChanger color={state.shirtColor} text="Shirt Color" onChange={c=>state.shirtColor = c}/>
            <ColorChanger color={state.blouseColor} text="Blouse Color" onChange={c=>state.blouseColor = c}/>
            <ColorChanger color={state.pantsColor} text="Pants Color" onChange={c=>state.pantsColor = c}/>
            <ColorStatus state={state}/>
        </form>
       
    )
}