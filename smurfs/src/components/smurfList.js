import React from "react";
import Smurf from "./smurf"

export default function smurfList(props) {
  console.log(props.data);
  return (
    <div className="smurf-list">
        {props.data.map(smurf=>{
            return <Smurf key={smurf.id} smurf={smurf} removeSmurf={props.removeSmurf} editSrmuf={props.editSrmuf}></Smurf>
        })}
    </div>
  );
}



