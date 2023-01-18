import css from "../InPoland/InPoland.module.css";

import andrew from "../../../img/andrew.png";
import nastia from "../../../img/nastia.png";

export const InPoland = () => {
  return <div className={css.in__pl}>
    <a className={css.link} href="#Cleveland">
      <ul className={css.list}>
        <li className={css.item}>
          <img alt="" src={andrew} className={css.avatar}></img>
          <span className={css.name}>Andrew</span>
        </li>
        <li className={css.item}>
          <img alt="" src={nastia} className={css.avatar}></img>
          <span className={css.name}>Nastia</span>  
        </li>
      </ul>
    </a>
  </div>
} 