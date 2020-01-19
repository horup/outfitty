import * as React from 'react';
import { IState } from '..';
declare var require;
let s = require("../../assets/test.svg");
export const Avatar = ({shirtColor, pantsColor, blouseColor}:{shirtColor:string, pantsColor:string, blouseColor})=>
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
        else {
            let svg = svgState.svg;
            let shirt = svg.getElementById("shirt");
            let collar = svg.getElementById("collar");
            let pants = svg.getElementById("pants");
            let blouse = svg.getElementById("blouse");
            shirt?.setAttribute("style", null);
            collar?.setAttribute("style", null);
            pants?.setAttribute("style", null);
            blouse?.setAttribute("style", null);


            shirt?.setAttribute("fill", shirtColor);
            collar?.setAttribute("fill", shirtColor);
            collar?.setAttribute("stroke", "black");
            collar?.setAttribute("stroke-width", "0.1");
            pants?.setAttribute("fill", pantsColor);
            blouse?.setAttribute("fill", blouseColor);
        }

    });
   
    return (
    <div>
        <object ref={r=>obj=r} data={s} type="image/svg+xml">
        </object>
    </div>)

}