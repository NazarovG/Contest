import React, { createContext, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import Portal from '../../Portal/Portal';
import Button from '../Button/Button';
import IconClose from '../icons/Close';

const modalContext = createContext();

const Modal = ({ onClose, isOpen, children }) => {
  const modalRef = React.createRef();

  useEffect(() => {
    if (isOpen) {
      modalRef.current.focus();
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }
  }, [isOpen, modalRef]);

  const onKeyDown = e => {
    if (e.keyCode === 27) {
      onClose();
      document.body.classList.remove('scroll-lock');
    }
  };
  return (
    isOpen && (
      <Portal>
        <div
          className="modal"
          ref={modalRef}
          onKeyDown={onKeyDown}
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal__overlay">
            <modalContext.Provider value={{ onClose }}>
              <div className="modal__layout">{children}</div>
            </modalContext.Provider>
          </div>
        </div>
      </Portal>
    )
  );
};

Modal.Header = function ModalHeader({ title, children }) {
  const { onClose } = useContext(modalContext);
  return (
    <div className="modal__header">
      {title && <div className="modal__title">{title}</div>}
      {children}
      <Button
        type="button"
        variant="icon"
        title="Закрыть"
        className="modal__btn-close"
        onClick={onClose}
      >
        <i>
          <IconClose />
        </i>
      </Button>
    </div>
  );
};
Modal.Main = function ModalMain({ children }) {
  return <div className="modal__main">{children}</div>;
};

Modal.Footer = function ModalFooter({ children }) {
  return <div className="modal__footer">{children}</div>;
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
};
Modal.defaultProps = {
  onClose: () => {},
  children: null,
  isOpen: false,
};

Modal.Header.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
Modal.Header.defaultProps = {
  children: null,
  title: null,
};

Modal.Main.propTypes = {
  children: PropTypes.node,
};
Modal.Main.defaultProps = {
  children: null,
};

Modal.Footer.propTypes = {
  children: PropTypes.node,
};
Modal.Footer.defaultProps = {
  children: null,
};

export default Modal;
