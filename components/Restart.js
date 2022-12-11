import React from "react";
import "./Restart.css";
export const Restart=({repeatBoard})=>{
    return(
        <button className="repeat-btn" onClick={repeatBoard}>Repeat</button>
    )
}