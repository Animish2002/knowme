import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/Login/LoginForm';
import Home from "./Components/Home";
import SignUp from './Components/Login/SignUp';
import OnboardConsumer from './Components/onboardConsumer';
import OnboardOrganization from './Components/onboardOrganization';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/onboardConsumer" element={<OnboardConsumer/>} />
        <Route path="/onboardOrganization" element={<OnboardOrganization/>} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
