import { useState } from "react";

import { InUsa } from "../../components/family/InUsa/InUsa";
import { InKyiv } from "../../components/family/InKyiv/InKyiv";
import { InDonetsk } from "../../components/family/InDonetsk/InDonetsk";
import { InPoland } from "../../components/family/InPoland/InPoland";
import Modal from "../../components/Modal/Modal";

import css from './Family.module.css';
import { motion } from "framer-motion";


const Family = () => {
  const [idOfMembers, setIdOfMembers] = useState({
    idOfMembers: '',
  });
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(idOfMembers);


  const onMembersClick = (evt) => {
    // console.log(evt.currentTarget);
    const { id } = evt.currentTarget;
    // console.log(id);

    setModalVisible(!modalVisible);
    setIdOfMembers( 
      {idOfMembers: id}
    )
  }

  const onClose = () => {
    setModalVisible(!modalVisible);
    setIdOfMembers( 
      {idOfMembers: ''}
    )
  }

  return <section className={css.familyCards}>
    <motion.div
      initial={{ opacity: 0, scale: 0.1, y: -200 }}
      animate={{ opacity: 1, scale: 1, y: 100 }}
      transition={{ duration: 1, delay: 0 }}>
      <div className={css.titles}>
        <h2 className={css.title}> Where are they ?</h2>
        <h2 className={css.title}>How are they ?</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}>
          <p className={css.text}>select a card for details</p>
      </motion.div>
      <motion.div
        className={css.list}
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}>
        <div className={css.item}>
          <InUsa onMembersClick={onMembersClick} />
        </div>
        <div className={css.item}>
          <InDonetsk onMembersClick={onMembersClick} />
        </div>
        <div className={css.item}>
          <InPoland onMembersClick={onMembersClick} />
        </div>
        <div className={css.item}>
          <InKyiv onMembersClick={onMembersClick} />
        </div>
      </motion.div> 
        
    </motion.div>
    {modalVisible && <Modal onClose={onClose} idOfMembers={idOfMembers.idOfMembers} /> }
  </section>
}


export default Family;