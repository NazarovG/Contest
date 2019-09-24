import React from 'react';
import Alert from '../../UI/Alert/Alert';

const EmptySearchAlert = () => (
  <Alert
    variant="search"
    title="Ничего не найдено"
    descr="Попробуйте другие параметры"
  />
);

export default EmptySearchAlert;
