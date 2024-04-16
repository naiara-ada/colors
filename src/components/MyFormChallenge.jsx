import BoxColor from "./BoxColor.jsx";
import { useState, useRef, useEffect } from "react";

function MyForm() {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

  useEffect(() => {
    inputRef.current.focus();
    
  }, []);

  return (
    <>
      <input 
        id="data"
        type="text"
        value={value}
        onChange={() => setValue(inputRef.current.value)}
        ref={inputRef}
       /> 
      <div className="container">
          {colors.map((color, index) => (
            <BoxColor key={index} color={color} value={value} />
          ))}
      </div>
      
    </>
  );
}

export default MyForm;