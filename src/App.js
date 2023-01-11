import './App.css';
import Welcome from './components/welcome/welcome';
import Menu from './components/menu/menu';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Locations from './components/locations/locations';
import NotFound from './components/notFound/notFound';
import Users from './components/user/profile';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Welcome />} />
          <Route path="menu" element={<Menu />} />
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
