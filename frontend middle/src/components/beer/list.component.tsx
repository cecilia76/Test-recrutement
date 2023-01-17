import React from 'react';
import BeersModel from '@/models/beers.model';
import BeerModel from '@/models/beer.model';
import BeerCard from '@/components/beer/beer-card.component';

interface IProps {
  beersInstance: BeersModel,
  origin: string,
}

const List:React.FC <IProps> = ({ beersInstance, origin }) => {
  const { beers } = beersInstance;

  return(
    <div>
      {
        !beers.length && <div className='no-data-found'>No Data Found</div>
      }
      <div className='grid'>
        {
          beers.map((beer:BeerModel) => (
            <div key={beer.getId()} className='grid-item'>
              <BeerCard key={beer.getId()} beerInstance={beer} origin={origin}></BeerCard>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default List;