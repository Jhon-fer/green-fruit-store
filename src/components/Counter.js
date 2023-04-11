import React from 'react'
import styles from '../styles/Counter.module.css'

export const Counter = () => {

  const [counter, setCounter] = React.useState(1)

  const upCounter = () => {
    if (counter < 10) {
      setCounter(counter + 1)
    }
  }

  const lessCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.counterTotal}>
        <button onClick={lessCounter} className={styles.button}>-</button>
        <p className={styles.number}>{counter}</p>
        <button onClick={upCounter} className={styles.button}>+</button>
      </div>
      <div className={styles.addToCart}>
        <button className={styles.cartButton}>Agregar al carrito</button>
      </div>
    </div>
  )
}
