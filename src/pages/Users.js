import React, { useState } from 'react'
import "./contactus.css"
import { SearchBar } from '../components/SearchBar'
import { SearchResultsList } from '../components/SearchResultsList'
import { SearchResult } from '../components/SearchResult'

export default function ConctactUs() {

  const [results, setResults] = useState([])

  return (
    <div className="random">
      <div className="search-bar-container">
        <SearchBar setResults={setResults}/>
        <SearchResultsList results={results}/>
      </div>
    </div>
  )
}
