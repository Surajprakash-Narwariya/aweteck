import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './login';
import SignUp from './signup';
import Home from './home';
import Nav from './nav';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
