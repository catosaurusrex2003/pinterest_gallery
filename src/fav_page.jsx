import React from "react"


function Favmessage(){
    return(
        <p>u have no favourites</p>
    )
}

export default function Favmaster(props){

    let fav_array = props.fav_array
    console.log(fav_array)
    let fav_array_to_render = []
    for(let i = 0 ; i < fav_array.length ; i++ ){
            fav_array_to_render.push(
                <div className="full_card">
                    <img href = {fav_array[i]} className="display_img" src = {fav_array[i]} />
                    <button id = {i} type="button" className="btn btn-danger del_fav_button" onClick = {props.onClick} >Del</button>
                </div>
            )
        
    }
    return(
        // {fav_array}
        // <h1>meow</h1>
        <div className="fav_div">
            <h1>Favourites</h1>
        {(fav_array_to_render.length < 1) ? <Favmessage/> :  <div className="inside_fav_div">{fav_array_to_render}</div>}
        </div>
    )
}