import React from 'react'
import Image from 'next/image';

 const url = "https://www.course-api.com/react-tours-project"

 type Tous = {
  id:string,
  name: string;
  info: string;
  image: string;
  price: string
 }

const ToursPage = async () => {
  const res = await fetch(url)
  const data: Tous[]=  await res.json()
  console.log(data)
}

export default ToursPage