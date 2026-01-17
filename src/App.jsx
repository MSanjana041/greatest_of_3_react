import { useState } from 'react'

function App() {
  const [a , SetA] = useState(0);
  const [b , SetB] = useState(0);
  const [c , SetC] = useState(0);
  const [result , SetResult] = useState(null);

  const calculate_g = () => {
    let n1 = a;
    let n2 = b;
    let n3 = c;

    let max = 0;

    if(n1 > n2 && n1 > n3){
      max = n1;
    }

    else if(n2 > n1 && n2 > n3){
      max = n2;
    }

    else{
      max = n3;
    }

    SetResult(max);
  }


  return (
    <div>Greatest of Three Numbers
    
    <br></br>
    <br></br>
    
    <label>NUMBER 1 :</label>
    <input type="number" value={a} onChange = {(e) => SetA(Number(e.target.value))} placeholder="Enter number 1"></input>
    <br></br>
    <br></br>

    <label>NUMBER 2 :</label>
    <input type="number" value={b} onChange = {(e) => SetB(Number(e.target.value))} placeholder="Enter number 2"></input>
    <br></br>
    <br></br>

    <label>NUMBER 3 :</label>
    <input type="number" value={c} onChange = {(e) => SetC(Number(e.target.value))} placeholder="Enter number 3"></input>
    <br></br>
    <br></br>

    <button onClick={calculate_g}>Compute the greatest</button>
    <p><b>Greatest of 3 : {result}</b></p>


    </div>
  );
    
}

export default App
