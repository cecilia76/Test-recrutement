import React from 'react';
import BeerModel from '@/models/beer.model';
import { useNavigate } from 'react-router-dom';
import CartButton from '@/components/beer/cart-button.component';

interface IProps {
  beerInstance: BeerModel,
  origin: string,
}

const BeerCard:React.FC <IProps> = ({ beerInstance, origin }) => {
  const navigate = useNavigate();

  const goToDetails = () => {    
    navigate('/beer-details/' + beerInstance.getId());
  }

  return (
    <div className='card'>
      <img onClick={goToDetails} className="card-img" src={beerInstance.getImageUrl()}></img>
      <div onClick={goToDetails} className="card-content">
        <div className="card-header">
          { beerInstance.getName() }
        </div>

        {origin === 'list-page' && <div className="card-volume">
          { beerInstance.getVolume() }
        </div>}
      </div>

      <CartButton beerInstance={beerInstance}></CartButton>
    </div>
  );
}

export default BeerCard;