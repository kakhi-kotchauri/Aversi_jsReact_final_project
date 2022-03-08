import './App.css';
import { useState, useEffect } from 'react';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Home } from './components/home/home';





function App() {

const [data, setdata] = useState([])
const [data2, setdata2] = useState([])
  
useEffect(() => {

  fetch('https://kakhi-kotchauri.github.io/fakedata.github.io/fakedata.json')
  .then( response => response.json())
  .then(response2 => setdata(response2.Products))
  .catch((error) => {
    console.log(error)
  })

  fetch('https://kakhi-kotchauri.github.io/fakedata.github.io//offers.json')
  .then( response => response.json())
  .then(response2 => setdata2(response2.offers))
  .catch((error) => {
    console.log(error)
  })

}, [])



  return (
    <div className='app-par'>
      <Header/>
      <Home data={data} data2={data2}/>
      <Footer/>
    </div>
  );
}

export default App;
