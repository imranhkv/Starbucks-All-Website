import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Componets/Menu/Menu';
import Rewards from './Componets/Rewards/Rewards';
import Gift from './Componets/Gift/Gift';
import FindStore from './Componets/FindAStore/FindStore';
import SignIn from './Componets/SignIn/SignIn';
import JoinNow from './Componets/JoinNow/JoinNow';
import Home from './Componets/Home/Home';
import GiftCard from './Componets/GiftCard/GiftCard';
import NotFound from './Componets/NotFound/NotFound';
import Featured from './Componets/Menu/Featured';
import { GlobalProvider } from './Componets/ContentAPI/Context';
import './App.css'
import Product from './Componets/Menu/Product';


function App() {

  return (
    <GlobalProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/gift" element={<Gift />} />
            <Route path="/giftcard/:id" element={<GiftCard />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/findastore" element={<FindStore />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/create" element={<JoinNow />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/menu/*" element={<Menu />} />
            <Route path="/featured" element={<Featured />} />
          </Routes>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
