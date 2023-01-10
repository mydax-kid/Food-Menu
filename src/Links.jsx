const Links = ({links, filterMenu}) => {
  return(
    <div className= 'btn-container'>
      {links.map((item, index) => {
      return(
        <button 
          key= {index}
          onClick= {() => filterMenu(item)}
          >{item}
        </button>
      )
      })}
    </div>
  )
}

export default Links;