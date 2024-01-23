import { useState } from 'react';
import './App.css'
import Tours from './components/Tours.js';
import data from './components/data.js';

function App() {
const[tours, setTours] = useState(data);
// const tours = data;

function removetour(id){
  setTours(tours.filter(tour => {
    return tour.id !== id;
  }))
}
function refreshbtn(){
  setTours(data);
}
if(tours.length === 0){
  return (
    <div className='lastdiv'>
      <div className='notour'>
        No tours left
      </div>
      <div>
      <button onClick={refreshbtn} className='ref-btn'>
        Refresh
      </button>
      </div>
    </div>
  )
}
  return (
    <div className="App">

    <div className='head-div'>
      <p className='heading'>
        Plan With Deew
      </p>
    </div>
  
    <div>
    <Tours tours = {tours} removetour = {removetour}></Tours>
    
    </div>

    </div>
  );
}

export default App;
