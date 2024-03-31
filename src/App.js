import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/Login/LoginForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
