import React, {useRef} from 'react'



const Search = ( { categories, filterItems} ) => {
    const inputRef = useRef()
    return (
      <div>

        <div>
          <input
          className="search-input"
          ref={inputRef}
          placeholder="search"
          onChange={(e) => {filterItems(e.target.value)}}

          >

          </input>
        </div>
        
        <button className="return-button"
           onClick={() => {
             inputRef.current.focus();
           }}>
             return to search
           </button>
          
           </div>
          
           )
          }
         
            

     
         
     
  

export default Search