import React from "react"
import '../styles/body.css'
function Body(){
    let style = {color:"blue", fontSize:"40px"}
    return(
    <div>
        <p style={style} >Este es el body</p>
    </div>
    )
}

export default Body