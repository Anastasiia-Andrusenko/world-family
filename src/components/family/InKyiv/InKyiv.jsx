import css from "../InKyiv/InKyiv.module.css";

import nastia from "../../../img/nastia.png";

export const InKyiv = ({onMembersClick}) => {
  return <div className={css.in__kyiv} id='InKyiv' onClick={onMembersClick}>
    <div className={css.link}>
      <ul className={css.list}>
        <li className={css.item}>
          <img alt="nastia_photo" src={nastia} className={css.avatar}></img>
          <span className={css.name}>Nastia</span>  
        </li>
      </ul>
    </div>
  </div>
} 