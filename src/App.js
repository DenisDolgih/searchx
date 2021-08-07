import React, {useState, useEffect} from 'react'
import './App.scss';
import fakeDB from './fakeDB'
import SearchInput from './components/SearchInput/SearchInput';
import FallingList from './components/FallingList/FallingList';
import SearchResults from './components/SearchResults/SearchResults'

function App() {

  const [query, setQuery] = useState("")
  const [searchingHistory, setSearchingHistory] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [suggestionsShow, setSuggestionsShow] = useState(false)
  const [results, setResults] = useState([])
  const [resultsShow, setResultsShow] = useState(false)
  const [searchTime, setSearchTime] = useState(false)

  useEffect(()=>{//get suggests from fakeDB by query
    const timeStart = performance.now()
    setResults(fakeDB.filter(elem => query.trim() !== "" && elem.title.toLowerCase().includes(query.trim().toLowerCase())))
    setSuggestions(fakeDB.filter(elem => query.trim() !== "" && elem.title.toLowerCase().startsWith(query.trim().toLowerCase())))
    const timeFinish = performance.now()
    setSearchTime(timeFinish - timeStart)
  }, [query])

  const changeHandler = (evnt) => {
    setQuery(evnt.target.value.toLowerCase())
    setSuggestionsShow(true)
  }

  const clickHandler = (evnt) => {
    const newQuery = evnt.target.innerText.toLowerCase()

    setQuery(newQuery)
    setSearchingHistory([...searchingHistory, newQuery])
    setSuggestionsShow(false)
    setResultsShow(true)
  }

  const hideSuggestions = () => {
    setSuggestionsShow(false)
  }

  const removeFromHistory = (evnt) => {
    evnt.preventDefault()
    setSearchingHistory(searchingHistory.filter(elem => elem.toLowerCase() !== evnt.target.dataset.query.toLowerCase()))
    setSuggestionsShow(true)
  }

  const showSuggestions = () => {
    if (query.trim() !== '') setSuggestionsShow(true)
  }

  const enterPressHandler = (evnt) => {
    if(evnt.key === 'Enter') {
      setSearchingHistory([...searchingHistory, query])
      setSuggestionsShow(false)
      setResultsShow(true)
    }
  }

  return (
    <div className="App">

      <div className="wrapper">

        <h1>SearchX</h1>
        <h4>search only "react", "angular", "vue" and "jquery" :)</h4>

        <div className="searchField">
          <span id="magnofier">🔍</span>
          <SearchInput
            value = {query} 
            changeHandler = {changeHandler} 
            hideSuggestions = {hideSuggestions}
            showSuggestions = {showSuggestions}
            enterPressHandler = {enterPressHandler}
          />

          <FallingList 
            suggests = {suggestions} 
            clickHandler = {clickHandler} 
            show = {suggestionsShow}
            searchingHistory = {searchingHistory}
            removeFromHistory = {removeFromHistory}
          />

        </div>
        <div className="">
          <SearchResults
            results = {results}
            show = {resultsShow}
            performance = {searchTime}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
