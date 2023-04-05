import React from 'react'

const Searchbar = ({className,placeholder , searchref}) => {
  return (
    <input className={className} placeholder={placeholder} ref={ searchref} />
  )
}

export default Searchbar