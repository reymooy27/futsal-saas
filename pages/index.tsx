import Head from 'next/head'
import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Head>
        <title>Futsal Manager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full h-full flex flex-column'>
        <SideBar/>
        <div className='w-full'>Home</div>
      </main>
    </div>
  )
}
