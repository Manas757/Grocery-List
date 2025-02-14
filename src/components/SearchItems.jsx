import React from 'react'

const SearchItems = ({search, setSearch}) => {
  return (
    <form className='searchform' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
        id='search'
        placeholder='Search Items'
        type="text"
        role='searchbox'
        value={search} 
        onChange={(e)=> setSearch(e.target.value)}
        />
    </form>
    
  )
}

export default SearchItems
