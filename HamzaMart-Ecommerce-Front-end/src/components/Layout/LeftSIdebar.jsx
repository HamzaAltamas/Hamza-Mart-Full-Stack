import React from 'react'
import SidebarContent from './SidebarContent'
import  {category,color , brands , price} from '../../data/data'
const LeftSIdebar = () => {
  console.log(category);
  return (
      <div>
      <SidebarContent title="Shop by category" data={category} />
      <SidebarContent dropDown={true} title="Shop by color" data={color}/>
      <SidebarContent dropDown={true} title="Shop by brand" data={brands}/>
      <SidebarContent  dropDown={true} title="Shop by price" data={price}/>
          
          
         
      </div>
  )
}

export default LeftSIdebar