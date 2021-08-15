import React from 'react';
import PropTypes from "prop-types";


// study state
class App extends React.Component { //필수로 extends 해야 함
  state = {
    count: 0
  };
  add = () => {
    // this.state.count= 1;
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    // this.state.count= -1;
    this.setState(current => ({count: current.count - 1}));
  };

  componentDidMount() { // render function이 호출 된 후 실행
    console.log('component rendered');
  }
  componentDidUpdate() { // update가 될때마다 실행
    console.log('updated');
  }
  componentWillUnmount() { // component가 떠날 때 호출
    console.log('goodbye');
  }

  render() { // render 안에서 return 해줘야 함
    console.log('hihi');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

// study jsx & props
/* 
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
*/

export default App;
