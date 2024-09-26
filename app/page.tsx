"use client"
import Image from 'next/image';
import Logo from '../assets/logo.svg';
import LandingImg from '../assets/main.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Torus } from 'lucide-react';
const url = "https://www.course-api.com/react-tours-project"



type Tours = {
 id:string,
 name: string;
 info: string;
 image: string;
 price: string
}

// eslint-disable-next-line react-hooks/rules-of-hooks


export default function Home() {
  const [tours, setTours] = useState<Tours[]>([])

  const ToursPage = async () => {
    const res = await fetch(url)
    const data = (await res.json()) as Tours[] // Correct type assertion here
    setTours(data)
  }
   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(() => {
   ToursPage()
   
   },[])

   
  return (
    <main>
      <div>
        {tours.map(item => {
                    const {name,id,image,price} = item

          return <h1 key={id}>{name}</h1>
        })}
      </div>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6 '>
        <Image src={Logo} alt='logo' />
      </header>
      <div>
      </div>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
        <div>
          <h1 className='capitalize text-4xl md:text-7xl font-bold'>
            job <span className='text-primary'>tracking</span> app
          </h1>
          <p className='leading-loose max-w-md mt-4 '>
            I am baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Button asChild className='mt-4'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt='landing' className='hidden lg:block ' />
      </section>
    </main>
  );

  
}