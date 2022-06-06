import axios from "axios";

export default axios.create({
  baseURL: 'https://api2.binance.com/api/v3/ticker/24hr'
//   baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en=US&page=1",
});
