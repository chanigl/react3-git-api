import React from 'react'
import './Select.css'

const Select = ({sortby,user}) => {
  return (
    <form>
        <select className='sort' name='sort' onChange={sortby}>
            <option selected disabled>sort by:</option>
            <option value="date">date</option>
            <option value="name">name</option>
            <option value="repo">repo</option>
            
        </select>
        
    </form>
  )
}

export default Select