import './App.css';
import Welcome from './components/view/welcome/welcome';
import Menu from './components/view/menu/menu';
import Sample from './sample';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Restaurants from './restaurants/restaurants';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Welcome />} />
          <Route path="menu" element={<Menu />} />
          <Route path="sample" element={<Sample />} />
          <Route path="restaurants" element={<Restaurants />} />
          {/* add error 404 page */}
          <Route path="*" element={<Welcome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
