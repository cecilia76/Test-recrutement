import React from 'react';
import IPagination from '@/interfaces/pagination.interface';

interface IProps {
  onPaginationChange: (arg:number) => void,
  paginationData: IPagination,
}

const Pagination:React.FC <IProps> = ( {onPaginationChange, paginationData} ) => {
  const onPrevious = () => {
    onPaginationChange(paginationData.page - 1);
  }

  const onNext = () => {
    onPaginationChange(paginationData.page + 1);
  }

  return (
    <div className='pagination'>
      {
        paginationData.page > 1 && <div>
          <button className='btn btn-secondary' onClick={onPrevious}>Previous</button>
        </div>
      }
      {
        paginationData.page > 1 && <div className='page-number'>{paginationData.page}</div>
      }
      {
        (!paginationData.totalPages || paginationData.totalPages > paginationData.page) &&
        <div>
          <button className='btn btn-primary' onClick={onNext}>Next</button>
        </div>
      }
    </div>
  );
}

export default Pagination;