import { World } from "./World/World";

import { InUsa } from "./family/InUsa/InUsa";

// import { InKyiv } from "./family/InKyiv/InKyiv";

import { InDonetsk } from "./family/InDonetsk/InDonetsk";

import { InPoland } from "./family/InPoland/InPoland";

import { UsaCard } from "./USAcard/UsaCard";

export const App = () => {
  return (
    <div className="container">
      <World/>
      <InUsa />
      {/* <InKyiv/> */}
      <InDonetsk />
      <InPoland />
      <UsaCard/>
    </div>
  )
};
