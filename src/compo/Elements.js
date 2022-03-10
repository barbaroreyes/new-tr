import React , {useContext} from 'react'
import {ElementContext} from '../contex/elements' ;

const Elements = () => {
    const element = useContext(ElementContext)
   console.log('all',element)
  return (
    <div>
      Elements 
      {element.map((item ,i)=>{
        return (
          <div>
          {item.name}
          </div>
        )
      })}
     
    </div>
  )
}

export default Elements



