import clevelend from "../../img/clevelend.jpg";

import css from "../USAcard/UsaCard.module.css";

export const UsaCard = ({ city, time, date, whether, info }) => {
  return <>
    <div className={css.container}>
    <h2 className={css.title}>clevelend</h2>
    <img className={css.img} alt="" src={clevelend} width="300px"></img>
      <div className={css.whether}>+4 rain</div>
    <div className={css.time}>16:35</div>
      <div className={css.day}>
        19
        <span className={css.month}>
          January
        </span>
      </div>
    <div className={css.info}>
      <p className={css.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    
      </p>
    </div>
  </div>
  </>
}