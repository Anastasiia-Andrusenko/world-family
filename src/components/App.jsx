import { useState } from "react";

import { World } from "./World/World";
import { InUsa } from "./family/InUsa/InUsa";
// import { InKyiv } from "./family/InKyiv/InKyiv";
import { InDonetsk } from "./family/InDonetsk/InDonetsk";
import { InPoland } from "./family/InPoland/InPoland";
import Modal from "./Modal/Modal";

// import getWeather from "api/getWeather";

// getWeather('Cleveland');

// import { UsaCard } from "./USAcard/UsaCard";

export const App = () => {
  // const [idOfMembers, setIdOfMembers] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const onMembersClick = (evt) => {
    // console.log(evt.currentTarget);
    const { id } = evt.currentTarget;
    console.log(id);

    setModalVisible(!modalVisible);
  }


  const onClose = () => {
    setModalVisible(!modalVisible);
  }

  



  return (
    <div className="container">
      <World/>
      <InUsa onMembersClick={onMembersClick} />
      {/* <InKyiv/> */}
      <InDonetsk onMembersClick={onMembersClick}/>
      <InPoland onMembersClick={onMembersClick}/>
      {/* <UsaCard/> */}
      {modalVisible && <Modal onClose={onClose} /> }
    </div>
  )
};

