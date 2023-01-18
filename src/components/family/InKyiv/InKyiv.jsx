import css from "../InKyiv/InKyiv.module.css";


export const InKyiv = () => {
  return <div className={css.in__kyiv}>
    <a className={css.link} href="#Cleveland">
      <ul className={css.list}>
        <li className={css.item}>
          <img alt="" src='' className={css.avatar}></img>
          <span className={css.name}>no one</span>
        </li>
        {/* <li className={css.item}>
          <img alt="" src={tania} className={css.avatar}></img>
          <span className={css.name}>Tania</span>  
        </li> */}
      </ul>
    </a>
  </div>
} 