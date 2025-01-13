import './App.css';
import React,{useState} from "react";

function App() {
//making state of our application

  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [bmi,setBmi]=useState(' ');
  const [message,setMessage]=useState(' ');

//logic

let calcBmi=(e)=>{

  e.preventDefault();
  if(weight===0 || height===0)
  {
    alert('please enter a valid weight and height')
  }
  else{
    let bmi=weight/(height*height);
    setBmi(bmi.toFixed(1))

   // Determine BMI message
   if (bmi < 18.5) {
    setMessage('You are underweight.');
  } else if (bmi >= 18.5 && bmi < 24.9) {
    setMessage('You are a healthy weight.');
  } else {
    setMessage('You are overweight.');
  }
}
};

//reload

let reload=()=>{
  window.location.reload()
}



  return (
    <div className="App">
      <div className='container'>
        <h2> BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input type='text' 
            placeholder='enter weight value' 
            value={weight} 
            onChange={(e)=> setWeight(e.target.value)}  
            />
          </div>
          <div>
            <label>Height (m)</label>
            <input type='text' 
            placeholder='enter height value' 
            value={height} 
            onChange={(event)=> setHeight(event.target.value)}  
            />
          </div>
          <button className='btn' type='submit'>
          Submit
          </button>
          <button className='btn btn-outline' onClick={reload} type='submit'>
          Reload
          </button>

          <div className='center'>
            <h3>Your Bmi is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
 