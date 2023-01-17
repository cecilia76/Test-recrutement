import IBeer from '@/interfaces/beer.interface';
import BeerContext from '@/contexts/beer.context';
import IIngredient from '@/interfaces/ingredient.interface';

class BeerModel {
  beer:IBeer;

  constructor(beer:IBeer) {
    this.beer = beer;
  }

  getId() {
    return this.beer.id;
  }

  getName() {
    return this.beer.name;
  }

  getDescription() {
    return this.beer.description;
  }

  getBrewersTips() {
    return this.beer.brewers_tips;
  }

  getImageUrl() {
    return this.beer.image_url;
  }

  getVolume() {
    return this.beer.volume.value + ' ' + this.beer.volume.unit;
  }

  getIngredients() {
    return [
      ...this.beer.ingredients.hops,
      ...this.beer.ingredients.malt,
      {
        name: 'yeast',
        amount: {
          unit: this.beer.ingredients.yeast,
        },
      },
    ] as IIngredient[];
  }

  checkBeerInCart() {
    return !!BeerContext.beers.find(x => x.id === this.getId());
  }
}

export default BeerModel;