import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorRing } from 'react-loader-spinner';


const Home = lazy(() => import("../pages/Home/Home"));
const Family = lazy(() => import("../pages/Family/Family"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<div style={{marginTop: '40vh', marginLeft: '40vw'}}><ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#8c03fc', '#9d26ff', '#ac49fc', '#c175ff', '#d5a4fc']}
/></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family" element={<Family/>}/>
      </Routes>
    </Suspense>
  )
}

export default UserRoutes;
