
import { Header,MainLink } from "./SharedLayout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export function SharedLayout() {
    return (
       <>
        <Header>
        <nav className="container">
          <MainLink to="/">Home</MainLink>
          <MainLink to="/tweets" state={{ from:"/"}}>Movies</MainLink>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
       </>
     

    );
}