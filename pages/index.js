import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PageLayout from '@/components/PageLayout'

export default function Home() {
  const router = useRouter()
  return ( 
    <PageLayout title='La Bajense'>
      <div className={styles.container}>
           <h1>El rock under o no comercial se desarrolla por fuera de cualquier emisión de los medios de comunicación. Mucho talento musical puede encontrarse en donde pocos buscan. Aún así, la oportunidad de conocer estas bandas es ideal para quien aspira escuchar música auténtica desligada de la mercantilización del arte. </h1>
        <button><Link href="/bands/bands">Bands</Link></button>
        <button onClick={() => router.push('/about')}>About Us</button>
        <style jsx>{`
              * {
                font-size: 30px;
                color: red;
                display: block;
                justify-content:center;
                align-content: center;
                text-align: center;
                background-color: black;
              }
              button {
                display: inline-block;
                width: fit-content;
                color: purple ;
                font-family: monospace;
                font-size: 2em;
                margin: .1em;
                border-radius: .2em;
              }
              button:hover {
                background-color: red;  color: white;
              }
        `}</style>
        </div>
    </PageLayout>
  )
}

