import * as React from 'react';
import { IState } from '..';
declare var require;
let s = require("../../assets/test.svg");
export const Avatar = ({shirtColor, pantsColor, blouseColor}:{shirtColor:string, pantsColor:string, blouseColor})=>
{
    let [svgState, setSvg] =  React.useState({svg:null as SVGSVGElement});
    React.useEffect(()=>
    {
        if (svgState.svg != null)
        {
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

    let obj:HTMLObjectElement;
    let test:HTMLDivElement;
    if (test != null)
    {
        console.log(test);
    }
    const load = ()=>
    {
        let svg = obj.getSVGDocument() as any;
        setSvg({svg:svg});
    }

    let div:HTMLDivElement;
    React.useEffect(()=>
    {
        fetch(s).then(async (resp)=>{
            div.innerHTML = await resp.text();
            let svg = div.getElementsByTagName("svg")[0];
            setSvg({svg:svg});
        });

    }, []);
   
    return <div ref={d=>div = d}/>)

}