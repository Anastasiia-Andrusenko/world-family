
import css from "../InUsa/InUsa.module.css";

import ann from "../../../img/ann.png";
import tania from "../../../img/tetiana.png";

export const InUsa = ({onMembersClick}) => {
  return <div className={css.in__usa} id='inUsa' onClick={onMembersClick}>
    <a className={css.link} href="#Cleveland">
      <ul className={css.list}>
        <li className={css.item}>
          <img alt="" src={ann} className={css.avatar}></img>
          <span className={css.name}>Ann</span>
        </li>
        <li className={css.item}>
          <img alt="" src={tania} className={css.avatar}></img>
          <span className={css.name}>Tania</span>  
        </li>
      </ul>
    </a>
  </div>
} 