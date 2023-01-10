import './App.css'
import Links from './Links.jsx';
import Menu from "./Menu.jsx";
import data from './data.js';
import {useState} from 'react';

const categories = ['all', ...new Set(data.map(item => item.category))];

function App() {
  const [menu, setMenu] = useState(data);
  const [links, setLinks] = useState(categories);
  
  const filterMenu = (type) => {
    if(type === 'all'){
      setMenu(data);
      return;
    }
    const newItem = data.filter(item => item.category === type);
    setMenu(newItem);
  }

  return (
    <main>
      <div className= 'header'>
        <h2>Our Menu</h2>
        <div className ='bar'></div>
      </div>  
      <Links links = {links} filterMenu= {filterMenu}/>
      <Menu menu = {menu}/>
    </main>
  )
}

export default App;
