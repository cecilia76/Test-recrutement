import React from 'react';
import { Link } from 'react-router-dom';
import BeerContext from '@/contexts/beer.context';
import { observer } from "mobx-react";

const Header:React.FC <{}> = () => {
  return (
    <div className='header'>
      <h2>BEERS</h2>

      <div>
        <Link to="/beer-list">List</Link>

        <Link to="/beer-cart">Cart ({BeerContext.beers.length})</Link>
      </div>
    </div>
  );
}

export default observer(Header);