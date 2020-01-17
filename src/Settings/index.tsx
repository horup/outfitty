import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ColorPicker from 'material-ui-color-picker';
import { IState } from '..';
import { useObserver } from 'mobx-react-lite';


export const Settings = ({state}:{state:IState})=>
{
    return useObserver(()=>
        <div>
            <ColorPicker
                name='color'
                value = {state.shirtColor}
                onChange={color => state.shirtColor = color}
            />
        </div>
    )
}