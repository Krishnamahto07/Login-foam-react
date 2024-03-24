import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
// import 'react-toastify/dist/ReactToastify.css';
import { Routes ,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

function App() {
  // const notify = () => toast('Here is your toast.');
  

  const [darkTheme , setDarkTheme] = useState(false);
  const [isLoggedin , setIsLoggedin] = useState(false)
 
  console.log(setIsLoggedin,"in app");
  return (
     <div className={darkTheme ? `dark`:''}>
        <div className='dark:bg-gray-900 dark:text-gray-200 flex flex-col items-center gap-5 w-full'>
          <Navbar darkTheme = {darkTheme} setDarkTheme = {setDarkTheme} 
          isLoggedin = {isLoggedin} setIsLoggedin
          = {setIsLoggedin} />
          
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/signup" element={<Signup isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />} />
            <Route path="/login" element={<Login isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
