import React from "react";


function Alop(props){

return <li  id={props.id}  onClick={()=>{ props.Run(props.id)}}>{props.stat} </li>

}


export default Alop