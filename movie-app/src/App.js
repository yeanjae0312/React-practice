import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: "1",
    // rating: 5,
  },
  {
    id:2,
    name: "samgyeopsal",
    image: "2",
    rating: 4.9,
  },
  {
    id:3,
    name: "Bibimbap",
    image: "3",
    rating: 4.8,
  },
  {
    id:4,
    name: "Doncasu",
    image: "4",
    rating: 4.7,
  },
  {
    id:5,
    name: "Kimbap",
    image: "5",
    rating: 4.6,
  },
];

function Food({name, picture, rating}) { // == props.name 
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating} / 5.0</h4>
      <p>image= {picture}</p>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div className="App">
      <h1>hello!!</h1>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
