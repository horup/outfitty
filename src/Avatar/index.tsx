import * as React from 'react';
declare var require;
let s = require("../../assets/test.svg");
export const Avatar = ()=>
{
    let obj:HTMLObjectElement;
    let svg: SVGSVGElement;
    React.useEffect(()=>
    {
        obj.onload = ()=>{
            svg = obj.contentDocument.firstElementChild as SVGSVGElement;
            console.log(svg);
            let head = svg.getElementById("head");
            let shirt = svg.getElementById("shirt");
            let pants = svg.getElementById("pants");

            shirt.setAttribute("fill", "yellow");
            pants.setAttribute("fill", "green");
        }
    });
    return (
       
        <div className="avatar">
            <object ref={r=>obj=r} data={s} type="image/svg+xml" style={{width:'100%'}}>
            </object>
        </div>
        )
}