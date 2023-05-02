import Head from 'next/head'
import { useRouter } from 'next/router'

export default function PageLayout ({children, title}) {
  const router = useRouter()
  return (
    <>
    <div className='main-container'>
      <Head>
        <title>{title}</title>
        <meta name='Página de bandas under de quilmes' content='la bajense, la página de bandas under de Quilmes' />
      </Head>

      <header className='logophrase' onClick={() => router.push('/')}>
        LA BAJENSE
      </header>

      <main>
        {children}
      </main>
      </div>
      {/* <div className='content-cont'> */}
      <style jsx>
        {`
          .main-container {
            background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/314e34c5-ab35-4152-8fc1-bfdf33741137/d5pbefd-f4b53dd9-872f-4693-8aa0-b17937c6c12c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMxNGUzNGM1LWFiMzUtNDE1Mi04ZmMxLWJmZGYzMzc0MTEzN1wvZDVwYmVmZC1mNGI1M2RkOS04NzJmLTQ2OTMtOGFhMC1iMTc5MzdjNmMxMmMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xsiptZobKWH3NKN1DD08tBkUYjKyZ7YLOyLqHcgrIUU');
            display: inline-block;
            flex-direction: row;
            justify-content: center;
            align-items: start;
            text-align: center;
            width: 100%;
            height: 100vh;
          }
          
          .main {
            font-size: 20px;
            color: red;
            max-width: 30%;
            text-align: center;
            background-color: black;
            box-shadow: 0px 0px 10px 10px #c75209;
            margin-top:-10em;
            padding: .5 rem;
            }
          .logophrase {
            font-size: 50px;
            color: #c75209;
            display: block;
            font-weight: bolder;
            margin: 1rem 1rem 0rem;
            padding: .5em;
            box-shadow: 0px 0px 10px 10px #c75209;
            border-radius: 20px;
            width:fit-content;
            background-color: #220a48
          }
          .logophrase:hover {background-color: red; color:white;
          }
          p {font-weight: bold;}
        `}
      </style>
    </>
  )
}