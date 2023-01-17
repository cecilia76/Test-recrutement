import React, { useEffect, useState } from 'react';
import List from '@/components/beer/list.component';
import Pagination from '@/components/beer/pagination.component';
import Loader from '@/components/site/loader.component';
import BeersModel from '@/models/beers.model';
import Setting from '@/const/site-settings';
import BeerService from '@/services/beer.service';
import { usePagination } from '@/hooks/usePagination.hooks';
import SearchInput from '@/components/beer/search-input.component';

function BeerListPage() {
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ searchText, setSearchText ] = useState<string>('');
  const [ beersInstance, setBeersInstance ] = useState<BeersModel>(new BeersModel([]));
  const [ paginationData, onPaginationChange ] = usePagination({
    page: 1, perPage: Setting.PAGINATION_PER_PAGE
  });

  useEffect(() => {
    fetchBeers();
  }, [paginationData]);

  function fetchBeers() {
    setIsLoading(true);
    BeerService.getBeers(paginationData.perPage, paginationData.page, searchText || '').then((response) => {
      setBeersInstance(new BeersModel(response));
      setIsLoading(false);
    });
  }

  function onSearchInputChange(searchText: string) {
    setSearchText(searchText || '');
    onPaginationChange(1);
  }

  // To control the pagination buttons, we should have the data of the pagination from the API like the number of the total results, total pages
  return isLoading ? <Loader></Loader> : (
    <div className='list-beers'>
      <SearchInput searchText={searchText} onSearch={onSearchInputChange}></SearchInput>
      <List beersInstance={beersInstance} origin='list-page'></List>
      { beersInstance.beers.length && <Pagination onPaginationChange={onPaginationChange} paginationData={paginationData}></Pagination>}
    </div>
  );
};

export default BeerListPage;