import React from 'react'
import search from "../assets/icons/search.png" 
const SearchBar = ({placeholder , value , onChange}) => {
  return (
    <div className='flex flex-row items-center bg-black rounded-full px-5 py-4'>
      <img src={search} alt="" className='size-5 object-contain'/>
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} className='text-white ml-2 flex-1' />
    </div>
  )
}

export default SearchBar