import React from 'react';
import ReactPaginate from 'react-paginate';
import './paginate.css';

const Pagination = ({ pageCount, handlePageClick, currentPage }) => {  

  return (
    <div className='bg-cyan-100 rounded-xl flex p-2 ml-17 mr-7'>
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          forcePage={currentPage}
        />
      </div>
      <div className="pagination-info">
        {currentPage + 1} of {pageCount}
      </div>
    </div>
  );
}

export default Pagination;
