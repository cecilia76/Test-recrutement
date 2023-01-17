import { observer } from 'mobx-react';
import React from 'react';
import List from '@/components/beer/list.component';
import BeersModel from '@/models/beers.model';
import BeerContext from '@/contexts/beer.context';

function BeerCartPage() {
  return (
    <div className='list-beers'>
      <List beersInstance={new BeersModel(BeerContext.beers)} origin='cart-page'></List>
    </div>
  );
};

export default observer(BeerCartPage);