import { makeObservable, action } from "mobx";
import IBeer from "@/interfaces/beer.interface";

class BeerContextClass {
  beers: IBeer[] = JSON.parse(window.localStorage.getItem('cart-beers-storage') || '[]');

  constructor() {
    makeObservable(this, { 
      beers: true,
      addBeer: action,
      removeBeer: action,
    });
  }

  addBeer(newBeer: IBeer) {
    const isExist = this.beers.find(x => x.id === newBeer.id);
    if (!isExist) {
      this.beers.push(newBeer);
      window.localStorage.setItem('cart-beers-storage', JSON.stringify(this.beers))
    }
  }

  removeBeer(removeBeerId: number) {
    this.beers = this.beers.filter(x => x.id !== removeBeerId);
    window.localStorage.setItem('cart-beers-storage', JSON.stringify(this.beers));
  }
}

const BeerContext = new BeerContextClass();

export default BeerContext;