import React from 'react';
import PropTypes from 'prop-types';
import ArrowLeft from '../icons/ArrowLeft';
import ArrowRight from '../icons/ArrowRight';
import './Pagination.scss';

const Pagination = ({ size, page, handleClick, limit, step }) => {
  const pages = Array.from(Array(size), (d, i) => i + 1);
  const toPage = current => {
    handleClick(current);
  };
  const toFirst = () => {
    handleClick(0);
  };

  const toLast = () => {
    handleClick(size - 1);
  };
  const paginations = pages.map((item, i) => {
    let btn = null;
    if (size <= limit) {
      btn = (
        <button
          type="button"
          className={`btn pagination__btn${i === page ? ' active' : ''}`}
          key={item}
          disabled={i === page}
          onClick={() => toPage(i)}
        >
          {item}
        </button>
      );
    } else if (page < step * 2) {
      if (i <= limit - (step + 1) || i === size - 1) {
        btn = (
          <button
            type="button"
            className={`btn pagination__btn${i === page ? ' active' : ''}`}
            key={item}
            disabled={i === page}
            onClick={() => toPage(i)}
          >
            {item}
          </button>
        );
      } else if (i === size - 2) {
        btn = (
          <button
            type="button"
            className="btn pagination__btn"
            key={item}
            disabled
          >
            ...
          </button>
        );
      }
    } else if (page > size - (step * 2 + 1)) {
      if (i >= size - (limit - step) || i === 0) {
        btn = (
          <button
            type="button"
            className={`btn pagination__btn${i === page ? ' active' : ''}`}
            key={item}
            disabled={i === page}
            onClick={() => toPage(i)}
          >
            {item}
          </button>
        );
      } else if (i === 1) {
        btn = (
          <button
            type="button"
            className="btn pagination__btn"
            key={item}
            disabled
          >
            ...
          </button>
        );
      }
    } else if (page >= step * 2 && page <= size - (step * 2 + 1)) {
      if (i === 1 || i === size - 2) {
        btn = (
          <button
            type="button"
            className="btn pagination__btn"
            key={item}
            disabled
          >
            ...
          </button>
        );
      } else if (
        (i >= page - step && i <= page + step) ||
        i === 0 ||
        i === size - 1
      ) {
        btn = (
          <button
            type="button"
            className={`btn pagination__btn${i === page ? ' active' : ''}`}
            key={item}
            disabled={i === page}
            onClick={() => toPage(i)}
          >
            {item}
          </button>
        );
      }
    }

    return btn;
  });

  return (
    size > 0 && (
      <div className="pagination">
        <div className="pagination__nav">
          <button
            type="button"
            onClick={toFirst}
            disabled={page === 0}
            className="btn pagination__btn pagination__btn-prev"
          >
            <i className="icon">
              <ArrowLeft />
            </i>
          </button>
          <div className="pagination__list">{paginations}</div>
          <button
            type="button"
            onClick={toLast}
            disabled={page === size - 1}
            className="btn pagination__btn pagination__btn-next"
          >
            <i className="icon">
              <ArrowRight />
            </i>
          </button>
        </div>
      </div>
    )
  );
};
Pagination.propTypes = {
  size: PropTypes.number.isRequired,
  page: PropTypes.number,
  handleClick: PropTypes.func,
  limit: PropTypes.number,
  step: PropTypes.number,
};
Pagination.defaultProps = {
  handleClick: () => {},
  page: 0,
  limit: 9,
  step: 2,
};
export default Pagination;
