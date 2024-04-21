import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/Login/LoginForm';
import Home from "./Components/Home";
import SignUp from './Components/Login/SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUp />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
