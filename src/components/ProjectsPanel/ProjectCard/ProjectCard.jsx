import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ProjectCard.scss';
import Public from '../../UI/icons/Public';
import AwardLeft from '../../UI/icons/AwardlLeft';
import AwardRight from '../../UI/icons/AwardRight';
import Tooltip from '../../UI/Tooltip/Tooltip';
import TradesTooltip from './TradesTooltip';
import Info from '../../UI/icons/Info';
import Event from '../../UI/icons/Event';
import formatNumber from '../../../utilities/formatNumber';
import formatDate from '../../../utilities/formatDate';
import Avatar from '../../UI/Avatar/Avatar';

const ProjectCard = ({ data }) => {
  const {
    username,
    sites,
    img,
    place,
    trades: { day: dayTrades, week: weekTrades, total: totalTrades },
    title,
    date,
  } = data;

  const formattedSites = formatNumber(sites);
  const formattedDate = formatDate(date);
  const formattedTotal = formatNumber(totalTrades.toFixed(2));
  const formattedDay = formatNumber(dayTrades.toFixed(2));
  const formattedWeek = formatNumber(weekTrades.toFixed(2));

  const placeClasses = classNames(
    'project-card__place',
    place === 1 && 'gold',
    place === 2 && 'silver',
    place === 3 && 'bronze',
  );
  return (
    <div className="project-card">
      <div
        className="project-card__header"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="col">
          <div className="project-card__label">Разработчик</div>
          <div className="row">
            <Avatar>{username.charAt(0)}</Avatar>
            <div className="project-card__username">{username}</div>
          </div>
        </div>
        <div className="col">
          <div className="project-card__label">Активных сайтов</div>
          <div className="row">
            <i className="icon">
              <Public width="16" height="16" />
            </i>
            <div className="project-card__value">{formattedSites}</div>
          </div>
        </div>
      </div>
      <div className="project-card__main">
        <div className={placeClasses}>
          <i className="project-card__place-icon">
            <AwardLeft width="19" height="27" />
          </i>
          <div className="project-card__place-value">{place}</div>
          <i className="project-card__place-icon">
            <AwardRight width="19" height="27" />
          </i>
        </div>
        <div className="project-card__title">{title}</div>
      </div>
      <div className="project-card__footer">
        <div className="col">
          <div className="row with-margin">
            <div className="project-card__label without-margin">
              Сумма трейдов
            </div>
            <Tooltip
              trigger={
                <i className="icon-info">
                  <Info width="16" height="16" />
                </i>
              }
            >
              <TradesTooltip day={formattedDay} week={formattedWeek} />
            </Tooltip>
          </div>
          <div className="row">
            <div className="project-card__symbol">$</div>
            <div className="project-card__value">{formattedTotal}</div>
            <div className="project-card__value" style={{ display: 'none' }}>
              {formattedDay}
            </div>
            <div className="project-card__value" style={{ display: 'none' }}>
              {formattedWeek}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="project-card__label">Дата добавления</div>
          <div className="row">
            <i className="icon">
              <Event width="16" height="16" />
            </i>
            <div className="project-card__value">{formattedDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    title: PropTypes.string,
    sites: PropTypes.number,
    place: PropTypes.number,
    trades: PropTypes.shape({
      day: PropTypes.number,
      week: PropTypes.number,
      total: PropTypes.number,
    }),
    img: PropTypes.string,
    date: PropTypes.number,
  }).isRequired,
};

export default memo(ProjectCard);
