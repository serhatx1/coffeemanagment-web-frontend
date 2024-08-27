import { useEffect, useState } from 'react';
import '../App.css';
import bean from '../img/bean.jpg';
import { Navbar } from './Navbar';

function Landing() {
  const [tables, setTables] = useState({});

  useEffect(() => {
    const cachedTables = localStorage.getItem('tables');
    if(Object.keys(cachedTables).length>0){
      console.log(cachedTables)
      setTables(JSON.parse(cachedTables));
    } else {
      const defaultTables = {};
      for (let i = 0; i < 32; i++) {
        defaultTables[i] = 'empty';
      }
      setTables(defaultTables);
      localStorage.setItem('tables', JSON.stringify(defaultTables));
    }
  }, []);
  useEffect(() => {
    if(Object.keys(tables).length>0){
      localStorage.setItem('tables', JSON.stringify(tables));

    }
  }, [tables]);
  const handleButtonClick = (key) => {
    setTables(prevTables => {
      const newTables = { ...prevTables };
      newTables[key] = newTables[key] === 'empty' ? 'full' : 'empty';
      setTables(newTables)
      return newTables;
    });
  };

  return (
    
    <div className="App" >


      <div className='tableContainer'>

      {Object.entries(tables).map(([key, value]) => (
        <div className={`Table ${value=="empty"?"yellow":"red"}`} key={key}>
          <p>Table {(key*1)+1}</p>
          <p className='emptyorfull'>{value.toUpperCase()}</p>
          <button onClick={()=>handleButtonClick(key)}>{value=="empty"?"Create Order":"Check Status"}</button>
          
        </div>
      ))}
      </div>
   
    </div>
  );
}

export default Landing;
