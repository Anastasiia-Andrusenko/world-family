import css from "../InPoland/InPoland.module.css";

import andrew from "../../../img/andrew.png";
import classNames from "classnames";
// import nastia from "../../../img/nastia.png";

export const InPoland = ({onMembersClick}) => {
  return <div className={css.in__pl} id='InPoland' onClick={onMembersClick}>
    <div className={css.link}>
      <ul className={css.list}>
        <li className={classNames(css.item, css.alone)}>
          <img alt="andrew_photo" src={andrew} className={css.avatar}></img>
          <span className={css.name}>Andrew</span>
        </li>
        {/* <li className={css.item}>
          <img alt="" src={nastia} className={css.avatar}></img>
          <span className={css.name}>Nastia</span>  
        </li> */}
      </ul>
    </div>
  </div>
} 