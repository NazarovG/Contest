import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../../UI/Alert/Alert';
import Button from '../../UI/Button/Button';
import IconRefresh from '../../UI/icons/Refresh';

const ErrorAlert = ({ action }) => (
  <Alert
    variant="error"
    title="Неудалось загрузить проекты"
    descr="Мы уже знаем и работаем над решением…"
    action={
      <Button type="button" onClick={action} variant="secondary" size="sm">
        <i className="left-icon">
          <IconRefresh width="16" height="16" />
        </i>
        Обновить
      </Button>
    }
  />
);

ErrorAlert.propTypes = {
  action: PropTypes.func.isRequired,
};

export default ErrorAlert;
