import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";
import PropTypes from "prop-types";


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => { // async는 js에게 기다려야 한다고 전달하는 역할 (뭐를? await 뒤에 있는 axios를), 접근이 끝날때까지 기다림 (axios.get이 좀 느리기 때문)
    const {
      data: {
        data : {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating'); // axios로 yts proxy를 가져옴
    this.setState({movies, isLoading: false}); // == this.setState({movies:movies});
  }
  componentDidMount() { // component가 그려진 후 실행
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        <div>
          {
            isLoading ? (
              <div className="loader">
                <span className="loader__text">Loading...</span>
              </div>
            ) : (
              <div className="movies">
                {
                  movies.map(movie => {
                    return <Movie
                    key={movie.id} 
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image} 
                    genres={movie.genres}
                    />
                  })
                }
                </div>
            )
          }
        </div>
      </section>
    );
  }
}


export default App;

// study state
/* 
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

  componentDidMount() { // render function이 호출 된 후 실행 (component가 만들어진 후)
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
*/

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

// export default App;
