import React from 'react'


const Select = ({sortby,user}) => {
  console.log('uull'+user)
  return (
    <form>
        <select name='sort' onChange={sortby}>
            <option selected disabled>sort by:</option>
            <option value="date">date</option>
            <option value="name">name</option>
            <option value="repo">repo</option>
            
        </select>
        
    </form>
  )
}

export default Select