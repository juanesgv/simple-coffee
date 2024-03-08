import React, { useEffect, useState } from 'react'
import Tabs from '../components/Tabs';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import axios from 'axios';

const Collections = () => {

  const [coffeList, setCoffeList] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(import.meta.env.VITE_API_URL)
        setCoffeList(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const renderCardGrid = filter => {
    return (
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-12'>
        {coffeList.filter(filter).map((coffee, index) => (
          <Card key={index} value={coffee} />
        ))
        }
      </div>
    )
  }

  const tabData = [
    {
      title: 'All products',
      content: renderCardGrid(() => true),
    },
    {
      title: 'Available now',
      content: renderCardGrid(coffee => !coffee.isSoldOut),
    },
    {
      title: 'Popular coffees',
      content: renderCardGrid(coffee => coffee.isPopular) ,
    },
  ];

  return (
    <>
      <div className='flex flex-col gap-4'>
        <h1 className='font-Montserrat text-white text-3xl font-semibold text-center'>Our Collection</h1>
        <p className='font-Montserrat text-base text-center text-text-white opacity-75'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      </div>

      {loading ? (
        <Spinner/>
      ):(
        <Tabs tabs={tabData} />
      )}
    </>

  )
}

export default Collections
