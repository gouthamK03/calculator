import Button from './components/Button'
import styles from './App.module.css'
import Display from './components/Display'
import { useState } from 'react'

function App() {
  
  let [calVal,setcalVal]=useState("")
  const onButtonClick=(buttonText)=>{
      if(buttonText==='C'){
        setcalVal("");
      }
    else if(buttonText==='='){
      const result=eval(calVal)
      setcalVal(result)
    }
    else{
      const textVal=calVal+buttonText;
      setcalVal(textVal)
    }

  }
   
  
  return (
   <div className={styles.container}>
    <Display displayValue={calVal} ></Display>
    <Button onClick={onButtonClick}></Button>
   </div>   
  )   
}

export default App;
