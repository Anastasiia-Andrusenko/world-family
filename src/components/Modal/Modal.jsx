import { createPortal } from 'react-dom';
import { Component } from 'react';
import { SlClose } from "react-icons/sl";
// import PropTypes from 'prop-types';
import css from '../Modal/Modal.module.css';
import cleveland from "../../img/clevelend.jpg";
import Clock from 'react-live-clock';



const modalRoot = document.querySelector('#modal-root')


export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = evt => {
    if (evt.code === 'Escape') {
      // console.log('esc');
      this.props.onClose();
    }
  }

  handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    return createPortal(
      <div className={css.overlay}>
        <div className={css.modal}>
          <h2 className={css.title}>cleveland</h2>
          <img className={css.img} alt="" src={cleveland}></img>
          {/* <div className={css.whether}>+4 rain</div> */}
          <div className={css.time}>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'America/New_York'} />
          </div>
          <div className={css.day}>
            <Clock format={'D MMMM, dddd'} ticking={false} timezone={'America/New_York'} />
          </div>
          <div className={css.info}>
            <p className={css.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <SlClose className={css.icon} onClick={this.props.onClose} />
        </div>
      </div>, modalRoot);
  }
}


Modal.propTypes = {
  // url: PropTypes.string.isRequired,
  // onClose: PropTypes.func.isRequired,
  // alt: PropTypes.string,
}

