import React from 'react'
import './SeriesCard.css';

const SeriesCard = (props ) => {
const{id,img_url,name,rating,description,genre,cast,watchurl}=props.currElement;
  return (
    <li>
          <div>
            <h3>#{id}</h3>
            <img
              src={img_url}
              alt={name}
              
            />
          </div>
          <div>
            <h2>Name: {name}</h2>
            <h3>Rating: <span className={`border border-white rounded ${rating >=8.5?"bg-[rgb(199,225,69)] text-white": "bg-[rgb(235,63,63)]  text-white"}` }>{rating}</span></h3>
            <p className="text-xl font-bold " >Summary: {description}</p>
            <p ClassName="m-6">Genre: {genre}</p>
            <p style={{margin:"1.2rem 0"}}>Cast: {cast}</p>
            <a href={watchurl} target="_blank" rel="noopener noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </li>
  )
}

export default SeriesCard