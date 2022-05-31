import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
    return (
        <Router>
            <Navbar />
            <div style={{ minHeight: '100vh' }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    {/* <Route path="/register" element={<RegisterUser />} /> */}
                </Routes>
            </div>
            <Footer />
        </Router>
    )
}

export default App;
