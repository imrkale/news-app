import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Toolbar} from '../components/toolbar'
export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>Next.js News App</h1>
        <form action="api/hello" method="POST">
          <input type="text" name="name" id="name" placeholder="Enter name"/>
          <button type="submit">Submit</button>
        </form>

        <h3>Your one stop shop for the latest news articles</h3>
      </div>
    </div>
  )
}
