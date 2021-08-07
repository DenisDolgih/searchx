import React from 'react'
import './SearchResults.scss'

const SearchResults = props =>{

    const results = props.results.map((elem, indx) => {
        return(
            <div className = "resultItem" key={indx}>
                <div className = "resultLink"><a href={elem.link}>{elem.link}</a></div>
                <div className = "resultTitle"><a href={elem.link}>{elem.title}</a></div>
                <div className = "resultDescription">{elem.description}</div>
            </div>
        )
    })

const resultsMeta = props.results.length > 0 ? <div className="resultsMeta">About {props.results.length} results. ({props.performance} ms)</div> : ""

const style = {display: props.show ? "block" : "none"}
    return(
        
            <div className="results" style={style}>
                {resultsMeta}
                {results}
            </div>
        
    )
}

export default SearchResults