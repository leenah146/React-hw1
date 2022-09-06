import React from "react";

const CalForm =({inputValue1,setinputValue1,inputValue2,setinputValue2,plu,min,div,tim,per}) => {
return(
    <div className="input-group mb-3">
  <input
  value={inputValue1}
  onChange={(e) =>setinputValue1(e.target.value)}
  type="text" className="form-control text-white" placeholder="enter a number"/>
    <input
  value={inputValue2}
  onChange={(e) =>setinputValue2(e.target.value)}
  type="text" className="form-control text-white" placeholder="enter a number"/>
  <button onClick={plu} type="button" className="btn btn-outline-light">+</button>
  <button onClick={min} type="button" className="btn btn-outline-light">-</button>
  <button onClick={tim} type="button" className="btn btn-outline-light">*</button>
  <button onClick={div} type="button" className="btn btn-outline-light">/</button>
  <button onClick={per} type="button" className="btn btn-outline-light">%</button>
</div>

)

}

export default CalForm;