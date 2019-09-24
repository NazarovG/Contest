import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Panel.scss';

const Panel = ({ children, className }) => {
  const classes = classNames('panel', className.length && className);
  return <div className={classes}>{children}</div>;
};

Panel.Header = function PanelHeader({ title, filters, searchbar }) {
  return (
    <div className="panel-header">
      <div className="panel-header__left">
        <h3 className="panel-title">{title}</h3>
        {filters && <div className="panel-header__filters">{filters}</div>}
      </div>
      {searchbar && <div className="panel-header__searchbar">{searchbar}</div>}
    </div>
  );
};

Panel.Main = function PanelMain({ children }) {
  return <div className="panel-main">{children}</div>;
};

Panel.Footer = function PanelFooter({ children }) {
  return <div className="panel-footer">{children}</div>;
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Panel.defaultProps = {
  className: '',
};

Panel.Header.propTypes = {
  title: PropTypes.string,
  filters: PropTypes.node,
  searchbar: PropTypes.node,
};

Panel.Header.defaultProps = {
  title: '',
  filters: null,
  searchbar: null,
};

Panel.Main.propTypes = {
  children: PropTypes.node.isRequired,
};

Panel.Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
