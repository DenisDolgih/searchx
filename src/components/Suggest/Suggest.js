import React from 'react'
import './Suggest.scss'

const Suggest = (props) => {

    const inHistoryStyle = props.inHistory ? "inHistory" : "notInHistory"

    return(
        <div className = "suggest" >

            <span
                className = {`suggestText ${inHistoryStyle}`}
                onMouseDown = {props.clickHandler}
            >
                {props.text.toLowerCase()}
            </span>

            {props.inHistory ? 
            <span
                data-query={props.text}
                className = "suggestDelete"
                onMouseDown = {props.removeFromHistory}
            >
                Remove
            </span> 
            : 
            ""}

        </div>
    )
}

export default Suggest