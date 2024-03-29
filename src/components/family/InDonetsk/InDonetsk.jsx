import css from "../InDonetsk/InDonetsk.module.css";

import nina from "../../../img/nina.png";
import nikolay from "../../../img/nikolay.png";
import lena from "../../../img/lena.png";
import sasha from "../../../img/sasha.png";

export const InDonetsk = ({onMembersClick}) => {
  return <div className={css.in__donetsk} id="InDonetsk" onClick={onMembersClick}>
    <div className={css.link}>
      <ul className={css.list}>
        <li className={css.item}>
          <div className={css.imgs}>
            <img alt="" src={nina} className={css.avatar}></img>
            <img alt="" src={lena} className={css.avatar}></img>
          </div>
          <span className={css.name}>grandmothers</span>
        </li>
        <li className={css.item}>
          <div className={css.imgs}>
            <img alt="" src={nikolay} className={css.avatar}></img>
            <img alt="" src={sasha} className={css.avatar}></img>
          </div>
          <span className={css.name}>grandfathers</span>  
        </li>
      </ul>
    </div>
  </div>
} 