import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../UI/Modal/Modal';

const ModalConditions = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header title="Условия конкурса"></Modal.Header>
      <Modal.Main>
        <p className="text">
          In the history of modern astronomy, there is probably no one greater
          leap forward than the building and launch of the space telescope known
          as the Hubble. While NASA has had many ups and downs, the launch and
          continued operation of the Hubble space telescope probably ranks next
          to the moon landings and the development of the Space Shuttle as one
          of the greatest space exploration accomplishments of the last hundred
          years.
        </p>
        <p className="text">
          In the history of modern astronomy, there is probably no one greater
          leap forward than the building and launch of the space telescope known
          as the Hubble. While NASA has had many ups and downs, the launch and
          continued operation of the Hubble space telescope probably ranks next
          to the moon landings and the development of the Space Shuttle as one
          of the greatest space exploration accomplishments of the last hundred
          years.
        </p>
        <p className="text">
          In the history of modern astronomy, there is probably no one greater
          leap forward than the building and launch of the space telescope known
          as the Hubble. While NASA has had many ups and downs, the launch and
          continued operation of the Hubble space telescope probably ranks next
          to the moon landings and the development of the Space Shuttle as one
          of the greatest space exploration accomplishments of the last hundred
          years.
        </p>
        <p className="text">
          In the history of modern astronomy, there is probably no one greater
          leap forward than the building and launch of the space telescope known
          as the Hubble. While NASA has had many ups and downs, the launch and
          continued operation of the Hubble space telescope probably ranks next
          to the moon landings and the development of the Space Shuttle as one
          of the greatest space exploration accomplishments of the last hundred
          years.
        </p>
        <p className="text">
          In the history of modern astronomy, there is probably no one greater
          leap forward than the building and launch of the space telescope known
          as the Hubble. While NASA has had many ups and downs, the launch and
          continued operation of the Hubble space telescope probably ranks next
          to the moon landings and the development of the Space Shuttle as one
          of the greatest space exploration accomplishments of the last hundred
          years.
        </p>
      </Modal.Main>
    </Modal>
  );
};

ModalConditions.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalConditions;
