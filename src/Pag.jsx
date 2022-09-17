import React from "react"

export default function Paginat(props){

    let pageno = props.pageno
    let cl_prev = ` page-item ${(pageno === 1) ? `disabled` : null}`
    let cl_next = ` page-item ${(pageno === 4) ? `disabled` : null}`

    return(
        <nav aria-label ="...">
            <ul className="pagination">
                <li className= {cl_prev} >
                    <a className="page-link " onClick = {props.onClick} >Previous</a>
                </li>
                <li className = {cl_next}>
                    <a className="page-link" onClick = {props.onClick} >Next</a>
                </li>
                <li className = "page-item sadau_page">
                    <a className = "page-link display-pagination ">
                        displaying page {pageno} of 4
                    </a>
                </li>
            </ul>
            
        </nav>
    )
}