import React, { useState, useEffect } from 'react';
import SignUpUser from './components/SignUpUser';
import Login from './components/Login'

function App() {
  const [isLogged, setIsLogged] = useState(false) // false

    const [DATA, setDATAs] = useState([])

    
    function AddNewData(data) {
      setDATAs((prev) => {
        return [...prev, data]
      })
    }


    return (
    <>
      { !isLogged && <SignUpUser onAddDATA={AddNewData} isLogged={() => setIsLogged(true)} DATA={DATA}/>} 
      { isLogged && <Login DATA={DATA}/>}
    </>
  );
}

export default App;