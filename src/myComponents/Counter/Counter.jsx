import React, { useState } from 'react'
import styles from "./Counter.module.css"

function Counter() {

  const [count, setCount] = useState(0);
  const [isScale, setIsScale] = useState(false);

  let animate = () => {
    setIsScale(true);
    setTimeout(() => {
      setIsScale(false);
    }, 300)
  }

  let increaseCount = () => {
    setCount(count + 1);
  }

  let decreaseCount = () => {
    setCount(count - 1);
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
      </div>
    </>
  )
}

export default Counter;