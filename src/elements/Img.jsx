import React from "react";


function Img(props) {
    return(
        <img 
        src={props.src}
        className={props.className}></img>
    )
}

export default Img;