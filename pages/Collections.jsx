import React from 'react'
import Tabs from '../components/Tabs';
import Card from '../components/Card';

const Collections = () => {

    const tabData = [
        {
          title: 'All products',
          content: (
            <div className='grid grid-cols-3 gap-8'>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          ),
        },
        {
          title: 'Available now',
          content: (
            <div>
              <p>Contenido de la pestaña 2:</p>
              <p>Otro párrafo aquí.</p>
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

            <Tabs tabs = {tabData}/>
        </>

    )
}

export default Collections
