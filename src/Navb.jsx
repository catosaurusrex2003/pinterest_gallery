import React from "react"

export default function Navbar(){


    let  style = {backgroundColor : "#e3f2fd" }
    return(

        // <nav className="navbar">
        //     <img className="react_img" src = "https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" />

        //     {/* <label className="switch" >
        //       <input type="checkbox" />
        //         <span class="slider round"></span>
        //     </label> */}

        //     <input className="search_input" type="text" placeholder="Search.."/>
        //     <button className="search_button" ><img  className="search_button_img" src = "./search_icon.png"/></button>

        // </nav>



        <nav className="navbar navbar-expand-lg " style={style} >
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className="react_img" src = "https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex " role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="">Search</button>
            </form>
            </div>
        </div>
        </nav>






    )
}