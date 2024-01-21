

import Header1 from "../Components/Header1"
import Header2 from "@/Components/Header2"
import Header3 from "@/Components/Header3"
import Image from "next/image"
import Head from "next/head"
import Header4 from "@/Components/Header4"
import Footer from "@/Components/footer"
const Home = () => {
  return (
    <div>
      <Head>
        <title>OYO : India's best Online Hotel Booking For Sanitized Stay.</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header1/>
      <Header2/>
      <Header3/>
      <div className="mx-20">
    
      <div className=" my-14 ">
        <Image src={'/banner1.avif'}  alt="banner1" width={200} height={200} className='h-60 w-full'/>

      </div>
      <div className="mb-14 ">
        <Image src={'/banner2.avif'}  alt="banner1" width={200} height={200} className='h-40 w-full'/>

      </div>

      <Header4/>

    </div>
  <Footer/>
    </div>
    
  )
}

export default Home
