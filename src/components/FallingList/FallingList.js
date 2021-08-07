import React from 'react'
import Suggest from '../Suggest/Suggest'
import './FallingList.scss'

const FallingList = (props) => {

    const style = {display: props.show ? "block" : "none"}

    const suggests = props.suggests.map((elmt, indx) => {
        return(
            <Suggest
                text = {elmt.title}
                key = {indx}
                clickHandler = {props.clickHandler}
                inHistory = {props.searchingHistory.includes(elmt.title.toLowerCase())}
                removeFromHistory = {props.removeFromHistory}
            />
        )
    })

    return (
    <div className="fallingList" style={style}>
        {suggests}
    </div>
)}

export default FallingList