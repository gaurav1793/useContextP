
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//step1 : create context
const usercontext = createContext();
//step 2: wrap child with context provider

//step 3: pass the value

//step 4 : consume the value

function App() {
  const [count,setcount]=useState({name:"gaurav"});
  return (
    
   <>
   
    <usercontext.Provider value={count}>
      <ChildA/>
    </usercontext.Provider>
    
   </>
    
  )
}

export default App
export {usercontext}