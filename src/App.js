import './App.css';
import { CartProvider } from 'react-use-cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
            <Routes>
              { publicRoutes.map((route, index) => {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page />} />
              })}
            </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
