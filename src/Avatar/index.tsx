import * as React from 'react';
import { IState } from '..';
declare var require;
let s = require("../../assets/test.svg");
export const Avatar = ({shirtColor, pantsColor}:{shirtColor:string, pantsColor:string})=>
{
    let obj:HTMLObjectElement;
    let [svgState, setSvg] =  React.useState({svg:null as SVGSVGElement});

    React.useEffect(()=>
    {
        if (svgState.svg == null)
        {
            obj.onload = ()=>{
                let svg = obj.contentDocument.firstElementChild as SVGSVGElement;
                setSvg({svg:svg});
            }

        }
        else
        {
            let svg = svgState.svg;
            let head = svg.getElementById("head");
            let shirt = svg.getElementById("shirt");
            let pants = svg.getElementById("pants");

            shirt.setAttribute("fill", shirtColor);
            pants.setAttribute("fill", pantsColor);
        }

    });
   
    return (
    <div>
        <object ref={r=>obj=r} data={s} type="image/svg+xml">
        </object>
    </div>)

}