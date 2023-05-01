import { CardUserList } from "./CardUserList/CardUserList";
import { useDispatch,useSelector } from "react-redux";
import { selectIsLoading,selectError } from "../redux/selectors";
import React,{ useEffect } from "react";
import { fetchUsers } from "../redux/operations";
import { AppStyled } from "./App.styled";
import { selectIndex } from "../redux/selectors";
import { Loader } from "./Loader/Loader";
export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const index = useSelector(selectIndex);
  useEffect(() => {
      dispatch(fetchUsers(index));
  }, [dispatch,index]);

  return (
    <AppStyled >
      <CardUserList/>
      {isLoading && <Loader></Loader>}
      {error && <p>Error</p>}
    </AppStyled >
  );
};
