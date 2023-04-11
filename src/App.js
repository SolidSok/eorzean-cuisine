import './App.css';
import Welcome from './components/welcome/welcome';
import Menu from './components/menu/menu';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Locations from './components/locations/locations';
import NotFound from './components/notFound/notFound';
import Users from './components/user/profile';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [food, setFood] = useState([]);

  const getFood = async () => {
    await axios
      .get('https://eorzean-cuisine-api.herokuapp.com/food')
      .then(res => {
        setFood(res.data);
        console.log(res.data, 'axios');
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFood();
  }, []);

  // const [locations, setLocations] = useState();
  // const getLocations = async () => {
  //   await axios
  //     .get('https://eorzean-cuisine.herokuapp.com/locations')
  //     .then(res => {
  //       setLocations(res.data);
  //       console.log(res.data, 'axios locations');
  //     })
  //     .catch(err => console.log(err));
  // };

  // useEffect(() => {
  //   getLocations();
  // }, []);
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Welcome />} />
          <Route path="menu" element={<Menu food={food} />} />
          <Route path="locations" element={<Locations />} />
          {/* add error 404 page */}
          <Route path="profile" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
