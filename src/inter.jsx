import React from "react"
// import Paginat from "./Pag"
// import Popover from '@mui/material/Button';
// import Button from '@mui/material/Button';




export default function Inter(props){

    const [array,set_array] = React.useState()

    React.useEffect(()=>{

        let array_to_render = []
        let garbage = ((props.pageno-1)*30)
        for(let i = garbage ; i < garbage+30 ; i++ ){
            if(props.DATA[i]!==undefined){
                array_to_render.push(
                    <div className="full_card">
                        <img href = {props.DATA[i]} className="display_img" src = {props.DATA[i]} />
                        <div className="button_holder">
                            <button id = {i} type="button" className="btn btn-primary add_fav_button" onClick = {props.onClick} >Add to fav</button>
                            <button id = {i} type="button" className="btn btn-secondary copy_button" onClick = {props.clicklink} >Copy link</button>
                        </div>
                    </div>
                )
            }
        }
        set_array(array_to_render)
        
    },[props.DATA,props.pageno])
    
    return(
        <div className="array_div">
            
            {array}
        </div>
    )

}