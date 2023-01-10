
const Menu = ({menu}) => {
  
  return(
    <div className= 'menu-wrap'>
      {menu.map(item => {
      const {id,img,title,price,desc} = item;

      return(
        <div key ={id} className= 'card'>
           <img src={img} alt={title} />
           <div className= 'content'>
             <div className= 'title'>
               <h4>{title}</h4>
               <p>${price}</p>
             </div>
             <p>{desc}</p>
           </div>
         </div>
      )
      
      })}
    </div>
  )
}

export default Menu;
