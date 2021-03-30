import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whatsapp 3.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Sidebar/>

    </div>
  )
}
