import styles from './Button.module.css';



const Button=({onClick})=>{

   const buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
        return(
        <div className={styles.buttonContainer}>
            {buttonNames.map((button)=>(  <button key={button} 
            onClick={()=>onClick(button)} className={styles.button}
        >{button}</button> ))}
    </div>
    )
}

export default Button;