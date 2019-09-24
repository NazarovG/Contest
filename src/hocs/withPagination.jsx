import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getDisplayName from '../utilities/getDisplayName';
import Pagination from '../components/UI/Pagination/Pagination';

const withPagination = range => Comp => {
  return function WithPagination({ data, page, ...props }) {
    WithPagination.propTypes = {
      page: PropTypes.number.isRequired,
      data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
    };
    WithPagination.displayName = `WithPagination(${getDisplayName(Comp)})`;
    const [pageOffset, setPageOffset] = useState(page);
    const changePage = value => {
      setPageOffset(value);
    };
    useEffect(() => setPageOffset(0), [data]);

    const visibleList = data.slice(
      pageOffset * range,
      range * (pageOffset + 1),
    );
    return (
      <>
        <Comp data={visibleList} {...props} />
        <Pagination
          handleClick={changePage}
          page={pageOffset}
          size={Math.ceil(data.length / range)}
        />
      </>
    );
  };
};

export default withPagination;
