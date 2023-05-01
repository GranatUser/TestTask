import { Route, Routes} from 'react-router-dom';
import React,{lazy} from "react";
import { SharedLayout } from './SharedLayout';

const GoMain = lazy(() => import('../components/goMain/GoMain'));
const HomePage = lazy(() => import('../pages/Home'));
const TweetsPage = lazy(() => import('../pages/tweets/Tweets'));
export const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
        <Route
          path="/tweets"
          element={
            <TweetsPage />
          }
        />
         <Route
          path="*"
          element= {<GoMain/>}
        />
      </Route>
      </Routes>
    </ >
  );
};
