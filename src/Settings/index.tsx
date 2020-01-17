import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ColorPicker from 'material-ui-color-picker';
import { IState } from '..';
import { useObserver } from 'mobx-react-lite';
import { Typography, Card, CardContent } from '@material-ui/core';


export const Settings = ({state}:{state:IState})=>
{
    return useObserver(()=>
        <Card>
            <CardContent>
            <form noValidate autoComplete="off">
                <div style={{marginBottom:'16px'}}>
                    <Typography>Shirt Color</Typography>
                    <ColorPicker
                        name='color'
                        hintText={state.shirtColor}
                        value = {state.shirtColor}
                        onChange={color => state.shirtColor = color}
                    />
                </div>
                <div>
                    <Typography>Pants Color</Typography>
                    <ColorPicker
                        name='color'
                        hintText={state.pantsColor}
                        value = {state.pantsColor}
                        onChange={color => state.pantsColor = color}
                    />
                </div>
                </form>
            </CardContent>
        </Card>
       
    )
}