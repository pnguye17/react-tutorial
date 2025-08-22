import './App.css';

const languages = ["JS", "Ruby"];

function App() {
  return (
   <Home></Home>
  );
}

const Home = () => {

  return (
    <>
      <p> Language is {languages[0]}</p>
      <button>click me to change the Language</button>
    </>
  )
}

export default App;
