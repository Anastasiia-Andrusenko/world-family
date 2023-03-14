import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";


const Home = lazy(() => import("../pages/Home/Home"));
const Family = lazy(() => import("../pages/Family/Family"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family" element={<Family/>}/>
      </Routes>
    </Suspense>
  )
}

export default UserRoutes;