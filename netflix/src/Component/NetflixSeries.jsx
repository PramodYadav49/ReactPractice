import React from 'react';
import seriesData from '../series.json';
import SeriesCard from './Lists';
import './SeriesCard.css';

const NetflixSeries = () => {
  // Ensure data exists before accessing properties
  

  return (<> 
  <h1 className="text-3xl font-bold text-red-500 ">Hello Tailwind</h1>

  <ul className="flex flex-wrap justify-center gap-5 p-5">
      
     {seriesData.map((currElement) => (
      //props Transfer one componet to another
        <SeriesCard key={currElement.id} currElement={currElement} />
     )
      )}
    </ul></>
   
  )
};

export default NetflixSeries;
