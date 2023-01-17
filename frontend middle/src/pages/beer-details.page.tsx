import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartButton from '@/components/beer/cart-button.component';
import Ingredient from '@/components/beer/ingredient.component';
import Loader from '@/components/site/loader.component';
import IBeer from '@/interfaces/beer.interface';
import BeerModel from '@/models/beer.model';
import BeerService from '@/services/beer.service';

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ beerInstance, setBeerInstance ] = useState<BeerModel>(new BeerModel({} as IBeer));

  useEffect(() => {
    BeerService.getBeerDetails(beerId as string).then((response:IBeer[]) => {
      setIsLoading(false);
      setBeerInstance(new BeerModel(response[0]));
    });
  }, []);

  return isLoading ? <Loader></Loader> : (
    <div className='beer-details'>
      <img className='beer-details-img' src={beerInstance.getImageUrl()} alt="" />

      <div className='beer-details-content'>
        <h2 className="title">{beerInstance.getName()} ({beerInstance.getVolume()})</h2>
        <div className="description">{beerInstance.getDescription()}</div>

        <Ingredient ingredients={beerInstance.getIngredients()}></Ingredient>

        <div className="brewers-tips">{beerInstance.getBrewersTips()}</div>
        <div className="beer-details-btn">
          <CartButton beerInstance={beerInstance}></CartButton>
        </div>
      </div>
    </div>
  );
};

export default BeerDetailsPage;