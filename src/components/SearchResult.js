import React from 'react'
import "./searchresult.css"

export const SearchResult = ({result}) => {
  return (
    <div className='search-result' onClick={(e) => alert(`
    Name:  ${result.name} 
    Email:  ${result.email}
    Username: ${result.username}`)}>{result.name}</div>
    
        
  )
}
