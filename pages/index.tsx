import Head from 'next/head';
import LandingPage from '../components/LandingPage/index'
export default function Home() {
  return (
    <div>
    <Head>
      <title>dddddddddd</title>
      <link rel="preload" href='/egypt-collage-concept.jpg' as='image' ></link>
    </Head>
    <main className=' bg-white min-w-screen min-h-screen  md:overflow-x-hidden'>
      <LandingPage></LandingPage>
   
    </main>
    </div>
  )
}
