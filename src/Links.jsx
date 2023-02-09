import {useState} from 'react'

const Links = ({links, filterMenu}) => {
  const [value, setValue] = useState(0)
  
  return(
    <div className= 'btn-container'>
      {
        links.map((item, index) => {
          return(
            <button 
              key= {index}
              onClick= {() => {
                filterMenu(item)
                setValue(index)
              }}
              className= {index === value && 'active'}
              >{item}
            </button>
          )
      })}
    </div>
  )
}

export default Links;