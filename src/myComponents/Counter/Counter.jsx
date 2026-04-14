import React, { useState } from 'react'
import styles from "./Counter.module.css"

function Counter() {

  const [count, setCount] = useState(0);
  const [isScale, setIsScale] = useState(false);

  let step = 0;

  function getStep() {
    step = parseInt(document.querySelector("#steps").value);
  }

  let animate = () => {
    setIsScale(true);
    setTimeout(() => {
      setIsScale(false);
    }, 300)
  }

  let increaseCount = () => {
    getStep();
    setCount(count + step);
  }

  let decreaseCount = () => {
    getStep();
    setCount(count - step);
  }

  let resetCount = () => {
    setCount(0);
  }

  return (
    <>
      <div className={`${styles.container} float`}>
        <h1 className={styles.heading} >REACT COUNTER</h1>
        <p className={`${styles.countDisplay} ${isScale ? "scale-pop" : "" }`} >{count}</p>
        <div className={styles.btns}>
          <button className={styles.btn} onClick={()=> {
            decreaseCount();
            animate();
          }} >-</button>
          <button className={`${styles.resetBtn} ${styles.btn}`} onClick={()=> {
            resetCount();
            animate();
          }} >RESET</button>
          <button className={styles.btn} onClick={()=> {
            increaseCount();
            animate();
          }} >+</button>
        </div>
        <div className={styles.stepsDiv} >
          <label htmlFor="steps">Steps:</label>
          <input type="number" defaultValue={1} id='steps' className={styles.steps} />
        </div>
      </div>
    </>
  )
}

export default Counter;