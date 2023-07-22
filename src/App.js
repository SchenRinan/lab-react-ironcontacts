// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import React, { useState } from 'react';

function App() {
  const [array, setArray] = useState([]);
  const [nameSort, setName] = useState(null);
  const [popSort, setPop] = useState(null);
  const addRandom = () => {
    const filteredContacts = contacts.filter(item => !array.includes(item));
    setArray(oldArray => {
      if(oldArray.length < contacts.length){
        return [filteredContacts[Math.floor(Math.random() * filteredContacts.length)], ...oldArray ]
      }
      else{ return oldArray }
    }
    );
  }
  const sortName = () => {
    // const aFirst = array.sort((a, b) => a.name.localeCompare(b.name)); 
    // const aLast = array.reverse((a, b) => a.name.localeCompare(b.name));
    if(nameSort){
    setArray([...array.sort((a, b) => b.name.localeCompare(a.name))]);
    // setArray(aFirst)
    setName(false)
    }
    else{
      setArray([...array.sort((a, b) => a.name.localeCompare(b.name))])
      // setArray(aLast)
      setName(true)
    }
    // console.log(aFirst)
    // console.log(aLast)
    // console.log(array)
  }
  const sortPop = () => {
    if(popSort){
      setArray([...array.sort((b, a) => b.popularity - a.popularity )])
      setPop(false)
    }
    else{
      setArray([...array.sort((a, b) => b.popularity - a.popularity )])
      setPop(true)
    }
  }
  const deleteOne = id => {
    const oneRemoved = array.filter(item => item.id !== id)
    setArray(oneRemoved)
  }

  return (
    <div className="App">
     <h1>Iron Contacts</h1>
     <button onClick={ addRandom }>Add Random Contact</button>
     <button onClick={ sortPop }>Sort by poularity</button>
     <button onClick={ sortName }>Sort by name</button>
     <section id='table-head'>
      <h3 className='table-top'>Picture</h3>
      <h3 className='table-top'>Name</h3>
      <h3 className='table-top'>Popularity</h3>
      <h3 className="table-top">Won Oscar</h3>
      <h3 className="table-top">Won Emmy</h3>
      <h3 className='table-top'>Delete</h3>
    </section>
      <section>
        { array.map( item => {
          return (
            <div className='table-body' key = { item.id } >
              <div className='table-top'><img src={ item.pictureUrl } alt={ item.name + 'image'} className='table-img' /></div>
              <div className='table-top'>{ item.name }</div>
              <div className='table-top'>{ item.popularity }</div>
              <div className='table-top'>{ item.wonOscar ? '🏆' : '' }</div> {/* TEMPORARY */}
              <div className='table-top'>{ item.wonEmmy ? '🌟' : '' }</div> {/* TEMPORARY */}
              <div className="table-top"><button onClick={ ()=> deleteOne(item.id) }>Delete</button></div>
            </div> )}) }
      </section>
      <section>
      

      </section>
    </div>
  );
}

export default App;
