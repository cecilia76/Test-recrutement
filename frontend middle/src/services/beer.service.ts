import IParams from '@/interfaces/api-params.interface';
import axios from 'axios';
import Setting from '@/const/site-settings';

class BeerService {
  private getConfig: IParams = {
    baseUrl: Setting.BASE_API_URL,
    method: 'get',
  }

  getBeers = async (perPage: number, page: number, searchBeer: string): Promise<any> =>{
    return await axios({
        ...this.getConfig,
        url: `${this.getConfig.baseUrl}?page=${page}&per_page=${perPage}${ searchBeer ? '&beer_name=' + searchBeer : '' }`,
    }).then ( (response) => {
        return response.data;
    }).catch((error) =>{
        return error.response;
    });
  }

  getBeerDetails = async (beerId: string): Promise<any> =>{
    return await axios({
        ...this.getConfig,
        url: `${this.getConfig.baseUrl}/${beerId}`,
    }).then ( (response) => {
        return response.data;
    }).catch((error) =>{
        return error.response;
    });
  }
}

const BeerServiceInstance = new BeerService();

export default BeerServiceInstance;
