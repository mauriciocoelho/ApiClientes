import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>  
      <Layout>
        <div>
          <Link href="/clientes">
            <h2>
              <p>
                Acessar Clientes
              </p>              
            </h2>
          </Link>
          
        </div>
      </Layout>       
    </>
  )
}
