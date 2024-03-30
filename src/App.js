import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Routes ,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { PrivateRoute } from './pages/PrivateRoute';

function App() {
  

  const [darkTheme , setDarkTheme] = useState(false);
  const [isLoggedin , setIsLoggedin] = useState(false)
  
  console.log(setIsLoggedin,"in app");
  return (
     <div className={darkTheme ? `dark`:''}>
        <div className='dark:bg-[#03001F] dark:text-gray-200 bg-[#BBE1FA] flex flex-col items-center w-screen h-screen'>
          <Navbar darkTheme = {darkTheme} setDarkTheme = {setDarkTheme} 
          isLoggedin = {isLoggedin} setIsLoggedin
          = {setIsLoggedin} />
          
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/signup" element={<Signup setIsLoggedin={setIsLoggedin} />} />
            <Route path="/login" element={<Login setIsLoggedin={setIsLoggedin} />} />
            <Route path="/dashboard" element={
              <PrivateRoute isLoggedin= {isLoggedin}>
                <Dashboard/>
              </PrivateRoute>
            } />
          </Routes>
        </div>
    </div>
  );
}

export default App;
