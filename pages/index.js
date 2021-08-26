import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>
        <h1>Budget-app</h1>
        <div className={styles.budgetPanel}>
            <div className={styles.budget}>
                Budget: 1500$
            </div>
            <div className={styles.remaining}>
                Remaining: 1500$
            </div>
            <div className={styles.spented}>
                Spented: 0$
            </div>
        </div>
        <h2>Expenses</h2>
        <div className={styles.expenses}>
            <p>Nothing here... Add something!</p>
        </div>
        <h2>Add expense</h2>
        <div className={styles.addExpense}>
            <form className={styles.form}>
                <input placeholder="name" />               
                <input type="number" placeholder="cost" />
                <button type="submit" className={styles.add}>Add</button>
            </form>
        </div>
    </div>
  )
}
