import React from "react"
import Navbar from "./Navb.jsx"
import Paginat from "./Pag.jsx"
import Inter from "./inter.jsx"
import Favmaster from "./fav_page.jsx"

export default function Page(){

    const [favon , set_favon] = React.useState(false)

    const [fav_array,set_fav_array] =React.useState([])

    const [DATA , set_DATA] = React.useState([])

    const [light , set_light]  = React.useState(true)

    const [pageno , setpageno] = React.useState(1)

    React.useEffect(()=>{
            fetch('https://shibe.online/api/shibes?count=100')
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

    function togglefav(){
        set_favon(prev => !prev)
    }

    function addfav(event){
        set_fav_array(prev => [...prev , DATA[event.target.id] ])
    }

    function clicklink(event){
        let i = event.target.id
        console.log(DATA[i])
        navigator.clipboard.writeText(DATA[i]);
        event.target.innerHTML = "copied"
    }

    function remfav(event){
        console.log(event.target.id)
        set_fav_array(prev => {
            let array = []
            for(let i = 0 ; i < prev.length ; i++){
                if(i == event.target.id){
                    null
                }
                else{
                    array.push(prev[i])
                }

            }
            return(array)
        })
        
    }

    function Notfav(props){
        return(
            <div>
                <Inter onClick = {props.onClick}  DATA = {DATA}  pageno={pageno} clicklink = {props.clicklink} />
                <Paginat pageno = {pageno} onClick = {(event) => {pagechange(event)}} />
            </div>
        )
    }

    return(
        <div className="outermost" style = {light?outermost_style:null}>
            
            <Navbar heartonClick = {togglefav} light = {light} onClick = {changemode}  style = {navbar_style} favon = {favon} /> 

            <div className="title_div" style = {light ? title_style:null}>
                <h1>Pinterest shibe Images</h1>
            </div>
            { !favon ?  <Notfav onClick = { (event) => addfav(event) } clicklink = {(event) => {clicklink(event)}} />
            :
            <Favmaster  fav_array = {fav_array} onClick = {(event) => remfav(event)} light = {light} />}
        </div>
    )
}
