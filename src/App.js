import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            { publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route path={route.path} element={<Page />} />
            })}
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
