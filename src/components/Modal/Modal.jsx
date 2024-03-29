import { createPortal } from 'react-dom';
import { Component } from 'react';
import { SlClose } from "react-icons/sl";
// import PropTypes from 'prop-types';
import css from '../Modal/Modal.module.css';
import cleveland from "../../img/clevelend.jpg";
// import washington from "../../img/washington.jpg";
import lodz from "../../img/lodz.jpg";
import donetsk from "../../img/donetsk.jpg";
import kyiv from "../../img/kyiv.jpg"; 
import Clock from 'react-live-clock';

import { motion } from "framer-motion";
import Weather from './Weather';
import News from './News';

const modalRoot = document.querySelector('#modal-root')

// const htmlRef = document.getElementsByTagName('html');

const htmlRef = document.getElementById('html');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
    htmlRef.style.overflow = "hidden";

  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    htmlRef.style.overflow = "unset";
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

  getTimezone = idOfMembers => {
    if (idOfMembers === 'InDonetsk') {
       return 'Europe/Moscow';
    } else if (idOfMembers === 'inUsa') {
      return 'America/New_York';
    } if (idOfMembers === 'InPoland') {
      return 'Europe/Warsaw';
    }
  }

  getCityName = idOfMembers => {
    if (idOfMembers === 'InDonetsk') {
       return 'Donetsk';
    } else if (idOfMembers === 'inUsa') {
      return 'Cleveland';
    } else if (idOfMembers === 'InPoland') {
      return 'Poland (Lodz)';
    } if (idOfMembers === 'InKyiv') {
      return 'Kyiv';
    }
  }

  getImg = idOfMembers => {
    if (idOfMembers === 'InDonetsk') {
       return donetsk;
    } else if (idOfMembers === 'inUsa') {
      return cleveland;
    } else if (idOfMembers === 'InPoland') {
      return lodz;
    } if (idOfMembers === 'InKyiv') {
      return kyiv;
    }
  }

  getCityNameForWeather = (idOfMembers) => {
    if (idOfMembers === 'inUsa') {
      return 'Cleveland';
    } else if (idOfMembers === 'InDonetsk') {
      return '47.917012,37.620669';
    } else if (idOfMembers === 'InPoland') {
      return 'Lodz';
    } if (idOfMembers === 'InKyiv') {
      return '50.46892807925003,30.51370074584721';
    }
  }
// 47.917012, 37.620669

  render() {
    const timezoneName = this.getTimezone(this.props.idOfMembers);
    const cityName = this.getCityName(this.props.idOfMembers);
    const imgSrc = this.getImg(this.props.idOfMembers);
    const cityForWeather = this.getCityNameForWeather(this.props.idOfMembers);
    // console.log(cityForWeather);
    return createPortal(
      <div className={css.overlay}>
        <motion.div
          className={css.modal}
          initial={{ scale: 0}}
          animate={{ scale: 1}}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 40
          }}
        >
          <div >
            <h2 className={css.title}>{cityName}</h2>
            
            <div className={css.blok}>
              <img className={css.img} alt={cityName} src={imgSrc}></img>
              <div className={css.day_info}>
                <div className={css.date_time}>
                <div className={css.time}>
                  <Clock format={'HH:mm:ss'} ticking={true} timezone={timezoneName} />
                </div>
                <div className={css.day}>
                  <Clock format={'D MMMM, dddd'} ticking={false} timezone={timezoneName} />
                </div>
              </div>
              <div className={css.info}>
                <Weather city={cityForWeather} />
              </div>
              </div>
            </div>
            <News city={cityName} />
            <SlClose className={css.icon} onClick={this.props.onClose} />
          </div>
          </motion.div>
        </div>, modalRoot);
  }
}


Modal.propTypes = {
  // url: PropTypes.string.isRequired,
  // onClose: PropTypes.func.isRequired,
  // alt: PropTypes.string,
}

