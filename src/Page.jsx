import React from "react"
import Navbar from "./Navb.jsx"
import Paginat from "./Pag.jsx"

export default function Page(){
    // console.log("meow")
    const [DATA , set_DATA] = React.useState([])

    const [array,set_array] = React.useState()

    const [pageno , setpageno] = React.useState(1)

    React.useEffect(()=>{
        // async function getResponse() {
            fetch('http://shibe.online/api/cats?count=100')
                .then (response => response.json())
                .then (data => set_DATA(data))

        // }
        // getResponse()
    }
    ,[])

    // console.log(DATA)

    React.useEffect(()=>{
        setTimeout(()=>console.log("meow"), 5000)
        let array_to_render = []
        let garbage = ((pageno-1)*30)
        for(let i = garbage ; i < garbage+30 ; i++ ){
            console.log(DATA[i])
            array_to_render.push(
                <img href = {DATA[i]} className="display_img" src = {DATA[i]}/>
            )
        }
        set_array(array_to_render)
    },[DATA,pageno])

    // let array_to_render = DATA.map(each => {
    //     return(
    //         <img className="display_img" src = {each} />
    //     )
    // })

    function pagechange(event){
        console.log(event.target.innerHTML)
        if(event.target.innerHTML === "previous"){
            pageno > 1 ? setpageno(prev => prev-1) : null
        }
        if(event.target.innerHTML ===   "next"  ){
            pageno < 4 ? setpageno(prev => prev+1) : null
        }
    }

    return(
        <div>
            <Navbar/> 
            <div className="array_div">
                {/* {console.log(array)} */}
                {array}
            </div>
            <Paginat pageno = {pageno} onClick = {(event) => {pagechange(event)}} />
        </div>
    )
}
