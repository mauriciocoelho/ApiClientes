import * as React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <>  
      <div>
        <Link href="/clientes">
          <h2>
            <p>
              Acessar Clientes
            </p>              
          </h2>
        </Link>
        
      </div>     
    </>
  )
}
