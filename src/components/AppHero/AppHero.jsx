import React, { useState } from 'react';
import IconAwardLeft from '../UI/icons/AwardlLeft';
import IconAwardRight from '../UI/icons/AwardRight';
import './AppHero.scss';
import Button from '../UI/Button/Button';
import ModalConditions from '../modals/ModalConditions';

const AppHero = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleModalShow = () => {
    setModalVisible(true);
  };
  return (
    <div className="app-hero">
      <div className="container">
        <h1 className="app-hero__title">Конкурс</h1>
        <p className="app-hero__descr">
          Сделай уникальный фейк с наибольшой суммой трейдов за месяц
        </p>
        <div className="app-hero__prize">
          <i className="icon">
            <IconAwardLeft />
          </i>
          <div>
            <div className="app-hero__prize-value">30 000 ₽</div>
            <div className="app-hero__prize-label">Главный приз</div>
          </div>
          <i className="icon">
            <IconAwardRight />
          </i>
        </div>
        <div className="app-hero__footer">
          <Button onClick={handleModalShow} size="lg">
            Узнать условия
          </Button>
          <p>Подведение итогов 16.12.2018</p>
        </div>
      </div>
      <ModalConditions isOpen={modalVisible} onClose={handleModalClose} />
    </div>
  );
};
export default AppHero;
