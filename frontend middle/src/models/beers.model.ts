import IBeer from '@/interfaces/beer.interface';
import BeerModel from '@/models/beer.model';

class BeersModel {
  beers:BeerModel[];

  constructor(beers:IBeer[]) {
    this.beers = beers.map((beer:IBeer) => {
      return new BeerModel(beer);
    });
  }
}

export default BeersModel;