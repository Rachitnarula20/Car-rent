import React from 'react';
import ReactPaginate from 'react-paginate';
import './paginate.css';

const Pagination = ({ pageCount, handlePageClick, currentPage }) => {
  return (
    <div>
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
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
