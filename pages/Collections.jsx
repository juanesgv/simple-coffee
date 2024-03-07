import React, { useEffect, useState } from 'react'
import Tabs from '../components/Tabs';
import Card from '../components/Card';
import axios from 'axios';

const Collections = () => {

  const [coffeList, setCoffeList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(import.meta.env.VITE_API_URL)
        setCoffeList(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const tabData = [
    {
      title: 'All products',
      content: (
        <div className='grid grid-cols-3 gap-8'>
          {coffeList.map((coffee, index) => (
            <Card
              key={index}
              value={coffee}
            />
          ))}
        </div>
      ),
    },
    {
      title: 'Available now',
      content: (
        <div className='grid grid-cols-3 gap-8'>
          {coffeList.map((coffee, index) => (
            !coffee.isSoldOut && (
              <Card
                key={index}
                value={coffee}
              />
            )
          ))}
        </div>
      ),
    },
    {
      title: 'Popular coffees',
      content: (
        <div className='grid grid-cols-3 gap-8'>
          {coffeList.map((coffee, index) => (
            coffee.isPopular && (
              <Card
                key={index}
                value={coffee}
              />
            )
          ))}
        </div>
      ),
    },
  ];

  return (
    <>
      <div className='flex flex-col gap-4'>
        <h1 className='font-Montserrat text-white text-3xl font-semibold text-center'>Our Collection</h1>
        <p className='font-Montserrat text-base text-center text-text-white opacity-75'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      </div>

      <Tabs tabs={tabData} />
    </>

  )
}

export default Collections
