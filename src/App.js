import { useState } from 'react';
import './App.css';
import CalForm from './CalForm';
const App = () => {


const [inputvalue1,setinputValue1]=useState('0');
const [inputvalue2,setinputValue2]=useState('0');
const [result,setResult]=useState('0');
const plu =() =>{
  const newresult=parseInt(inputvalue1)+parseInt(inputvalue2)
 setResult(newresult)

}
const min =() =>{
  const newresult=parseInt(inputvalue1)-parseInt(inputvalue2)
 setResult(newresult)

}
const tim =() =>{
  const newresult=parseInt(inputvalue1)*parseInt(inputvalue2)
 setResult(newresult)

}
const div =() =>{
  const newresult=parseInt(inputvalue1)/parseInt(inputvalue2)
 setResult(newresult)

}
const per =() =>{
  const newresult=parseInt(inputvalue1)%parseInt(inputvalue2)
 setResult(newresult)

}
return(

  <div className='container text-center border border-3 border-white pb-5 pt-4'>
    <h1>Calculator</h1>
<CalForm inputValue1={inputvalue1}
setinputValue1={setinputValue1}
inputValue2={inputvalue2}
setinputValue2={setinputValue2}
plu={plu}
min={min}
tim={tim}
div={div}
per={per}
/>
<div className='p-3 border border-light rounded-end'>
 <h1>{result}</h1> 
</div>

  </div>

)

}

export default App;
