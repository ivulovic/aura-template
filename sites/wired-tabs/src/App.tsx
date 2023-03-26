import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Sidebar from './containers/Sidebar';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Details from './pages/Details';
import Main from './containers/Main';
import Home from './pages/Home';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="layout">
                <Header />
                <Sidebar />
                <Main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="/favorites" element={<Favorites />} />
                    </Routes>
                </Main>
            </div>
        </BrowserRouter>
    );
}

export default App;
