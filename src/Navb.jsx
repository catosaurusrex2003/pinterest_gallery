import React from "react"

export default function Navbar(props){

    let  style = {backgroundColor : "#95e8d4" }
    return(
        <nav className="navbar navbar-expand-lg  " style={props.light ?props.style :style} >
        <div className="container-fluid navbar-fixed-top">
            <a className="navbar-brand" href="https://i.ytimg.com/vi/rtQKP1we-Dk/maxresdefault.jpg"><img className="react_img rotate"  src = "https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" /></a>
            <form className="d-flex " role="search">
                <img className="heart_nav" onClick = {props.heartonClick} src = {props.favon? "home.svg" : "heart_nav.svg" }/>
                <a className="gitlogo" href = "https://github.com/catosaurusrex2003" >  <img className="gitlogo" src = "./github_logo.svg"/></a>
                <button type="button" className="btn btn-secondary " onClick = {props.onClick} >{props.light? <img className="mode_img" src = "moon 321.svg"/> : <img className="mode_img" src = "sun 321.svg"/>}</button>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-success" type="">Search</button>
            </form>
        </div>
        </nav>
    )
}

