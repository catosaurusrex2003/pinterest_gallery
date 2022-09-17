import React from "react"
// import Paginat from "./Pag"

export default function Inter(props){

    const [array,set_array] = React.useState()

    React.useEffect(()=>{

        let array_to_render = []
        let garbage = ((props.pageno-1)*30)
        for(let i = garbage ; i < garbage+30 ; i++ ){
            if(props.DATA[i]!==undefined){
                array_to_render.push(
                    <img href = {props.DATA[i]} className="display_img" src = {props.DATA[i]}  />
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