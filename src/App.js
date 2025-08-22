import './App.css';
import React, { useState, useContext, createContext } from 'react';

const languages = ["JS", "Ruby"];

//create context

const LanguageContext = createContext(null);

function App() {
  
  const [language, setLanguage] = useState("null");
  
  const toggle = () => {
    setLanguage(
      (prevLang) => (prevLang === 'Java'? 'Ruby' : 'Java' )
    )

  }
  return (
    <LanguageContext.Provider value={{language, toggle}}>
     <Home/>    

    </LanguageContext.Provider>

   
  );
}

const Home = () => {
  const {language, toggle} = useContext(LanguageContext);

  return (
    <>

            <p> Language is {language}</p>
            <button onClick={toggle}>click me to change the Language</button>


    </>
  )
}

export default App;
