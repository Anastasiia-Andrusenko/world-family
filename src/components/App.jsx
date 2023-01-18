import { World } from "./World/World";

import { InUsa } from "./family/InUsa/InUsa";

import { InDonetsk } from "./family/InDonetsk/InDonetsk";

import { InPoland } from "./family/InPoland/InPoland";

export const App = () => {
  return (
    <div className="container">
      <World/>
      <InUsa />
      <InDonetsk />
      <InPoland/>
    </div>
  )
};
