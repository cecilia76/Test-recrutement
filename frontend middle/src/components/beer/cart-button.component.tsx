import React, { useState } from 'react';
import BeerModel from '@/models/beer.model';
import BeerContext from '@/contexts/beer.context';

interface IProps {
  beerInstance: BeerModel,
}

const CartButton:React.FC <IProps> = ({ beerInstance }) => {
  const [ isInCart, setIsInCart ] = useState<boolean>(beerInstance.checkBeerInCart());

  const addInCart = () => {
    setIsInCart(true);
    BeerContext.addBeer(beerInstance.beer);
  }

  const deleteFromCart = () => {
    setIsInCart(false);
    BeerContext.removeBeer(beerInstance.getId());
  }

  return (
    <>
      {!isInCart && <button onClick={addInCart} className='btn btn-primary'>Add To Cart</button>}
      {isInCart && <button onClick={deleteFromCart} className='btn btn-secondary'>Remove From Cart</button>}
    </>
  );
}

export default CartButton;