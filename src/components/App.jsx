import { World } from "./World/World";

import { InUsa } from "./family/InUsa/InUsa";

export const App = () => {
  return (
    <div className="container">
      <InUsa/>
      <World/>
    </div>
  )
};
