import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Desafio Cuco</title>
        <meta name="description"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Olá esse é o desafio de Desenvolvedor Full Stack do candidato Mauricio Rodrigues Coelho.
          </p>
        </div>

        <div className={styles.center}>
          <Link href="/clientes" className={styles.card}>
            <h2 className={inter.className}>
              <p>
                Acessar Clientes
              </p>              
            </h2>
          </Link>
          
        </div>

        <div className={styles.grid}></div>
      </main>
    </>
  )
}
