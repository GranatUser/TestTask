import { CardUserList } from "./CardUserList/CardUserList";
import { useDispatch,useSelector } from "react-redux";
import { selectIsLoading,selectError } from "../redux/selectors";
import React,{ useEffect } from "react";
import { fetchUsers } from "../redux/operations";
import { AppStyled } from "./App.styled";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <AppStyled >
       {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <CardUserList/>
    </AppStyled >
  );
};
