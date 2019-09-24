import React from 'react';
import PropTypes from 'prop-types';

const TradesTooltip = ({ day, week }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="project-card__label">День</div>
          <div className="row">
            <div className="project-card__symbol">$</div>
            <div className="project-card__value">{day}</div>
          </div>
        </div>
        <div className="col">
          <div className="project-card__label">Неделя</div>
          <div className="row">
            <div className="project-card__symbol">$</div>
            <div className="project-card__value">{week}</div>
          </div>
        </div>
      </div>
    </>
  );
};

TradesTooltip.propTypes = {
  day: PropTypes.string.isRequired,
  week: PropTypes.string.isRequired,
};

export default TradesTooltip;
