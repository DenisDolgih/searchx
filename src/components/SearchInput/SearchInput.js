import React, {useRef, useEffect} from 'react'

import './SearchInput.scss'

const SearchInput = (props) => {

    const input = useRef(null)

    useEffect(()=>{
        input.current.focus()

    },[])

    return(
            
            <input
                autoComplete="off"
                ref = {input} 
                type = "search"
                className = "SearchInput" 
                onChange = {props.changeHandler} 
                onBlur = {props.hideSuggestions}
                onFocus = {props.showSuggestions}
                onKeyPress = {props.enterPressHandler}
                id = "inputSearch" 
                value = {props.value}
            />

    )
}

export default SearchInput