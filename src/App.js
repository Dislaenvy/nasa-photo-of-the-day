import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import Photo from './components/photo'

function App() {
  const [nasData, setNasData] = useState(null)

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5')
    .then((res) => {
      setNasData(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <>
    <div className="App">
  <nav>  
    <a>Home</a>
    <a>Date 3/17/2021</a>
  </nav>
    <h1>NASA Photo of the Day 🚀</h1>
    
  {nasData && nasData.map((nasa) => {
    return ( 
    <Photo 
      key={nasa.url}
      nasDataURL={nasa.url}
    />
  )
  }) 
  }
  </div>
  </>
  );
}
export default App;
