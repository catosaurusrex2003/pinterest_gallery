import React from "react"
import Navbar from "./Navb.jsx"
import Paginat from "./Pag.jsx"
import Inter from "./inter.jsx"

export default function Page(){

    const [DATA , set_DATA] = React.useState([])

    const [light , set_light]  = React.useState(false)

    const [pageno , setpageno] = React.useState(1)

    React.useEffect(()=>{
            fetch('http://shibe.online/api/shibes?count=100')
                .then (response => response.json())
                .then (data => set_DATA(data))
    }
    ,[])

    function changemode(){
        set_light(prev => !prev)
    }

    function pagechange(event){
        if(event.target.innerHTML == "Previous"){
            pageno > 1 ? setpageno(prev => prev-1) : null
        }
        if(event.target.innerHTML ==   "Next"  ){
            pageno < 4 ? setpageno(prev => prev+1) : null
        }
    }

    let title_style = {
        color : "white",
    }
    let outermost_style = {
        background : '#04241f',
    }

    let navbar_style = {
        background : "#3a947e"
    }

    return(
        <div className="outermost" style = {light?outermost_style:null}>
            
            <Navbar light = {light} onClick = {changemode}  style = {navbar_style}  /> 

            <div className="title_div" style = {light ? title_style:null}>
                <h1>Pinterest shibe Images</h1>
            </div>

            <Inter  DATA = {DATA}  pageno={pageno}  />

            <Paginat pageno = {pageno} onClick = {(event) => {pagechange(event)}} />
        </div>
    )
}
