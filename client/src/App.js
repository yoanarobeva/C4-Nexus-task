import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from './components/Footer.js/Footer';
import ProductsView from './components/ProductsView/ProductsView';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/:category?" element={<ProductsView />} />
        <Route path="/:category/:accessory?" element={<ProductsView />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
