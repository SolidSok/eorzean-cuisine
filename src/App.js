import './App.css';
import Welcome from './components/view/welcome/welcome';
import Menu from './components/view/menu/menu';
import Sample from './sample';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Locations from './locations/locations';
import NotFound from './components/notFound/notFound';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Welcome />} />
          <Route path="menu" element={<Menu />} />
          <Route path="sample" element={<Sample />} />
          <Route path="locations" element={<Locations />} />
          {/* add error 404 page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
