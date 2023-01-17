import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BeerCartPage from '@/pages/beer-cart.page';
import BeerDetailsPage from '@/pages/beer-details.page';
import BeerListPage from '@/pages/beer-list.page';

const routers:React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/beer-list" element={ <BeerListPage /> }></Route>
      <Route path="/beer-cart" element={ <BeerCartPage/> }></Route>
      <Route path="/beer-details">
        <Route path="" element={ <Navigate to="/beer-list"/>  }></Route>
        <Route path=":beerId" element={ <BeerDetailsPage/> }></Route>
      </Route>
      <Route path="*" element={ <Navigate to="/beer-list"/> }></Route>
    </Routes>
  );
};

export default routers;