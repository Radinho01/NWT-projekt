import React, {useState} from 'react'
import '../style/crossword-input-field.css'



const CroswordInputFeld = (props) => {

  const [maxLength, setMaxLength] = useState(1);
  const [inputBackgroundColor, setInputBackgroundColor] = useState("white")

  const handleInputChange = (e) => {
    const uppercaseText = e.target.value.toUpperCase();
    e.target.value = uppercaseText;
    const inputValue = e.target.value;
    const regex = /^[A-Za-zČčĆćŽžŠšĐđ]+$/;
    if(inputValue==="N")
    {
      setMaxLength(2);
    }else{
      setMaxLength(1)
    }
    if (!regex.test(inputValue)) {
        e.target.value = '';
    }

    if(inputValue===props.corectInput)
    {
      setInputBackgroundColor("#cef6d2")
      props.setSolvedFieldCounter(props.solvedFieldCounter+1)
      console.log(props.solvedFieldCounter);
    }
    else if(inputValue===""){
      setInputBackgroundColor("white")
      }
    else if(inputValue!==props.corectInput)
    {
    setInputBackgroundColor("#f6cece")
    }
    
    
};

  return (
    <div>
      <input className='inputField' maxLength={maxLength} onChange={handleInputChange} style={{backgroundColor: inputBackgroundColor}}></input>
    </div>
  )
}

export default CroswordInputFeld
