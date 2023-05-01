import { CardUserList } from "../../components/CardUserList/CardUserList";
import { useDispatch,useSelector } from "react-redux";
import { selectIsLoading,selectError } from "../../redux/selectors";
import React,{ useEffect } from "react";
import { fetchUsers } from "../../redux/operations";
import { TweetsStyled } from "./Tweets.styled";
import { selectIndex } from "../../redux/selectors";
import { Loader } from "../../components/Loader/Loader";
import { useLocation } from "react-router";
import { GoBack } from "./Tweets.styled";
 const Tweets = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const index = useSelector(selectIndex);
  const location = useLocation();
  const backLinkHref = location.state?.from??'/' ;
  useEffect(() => {
      dispatch(fetchUsers(index));
  }, [dispatch,index]);

  return (
    <TweetsStyled >
    <GoBack to={backLinkHref}>Back</GoBack>
      <CardUserList/>
      {isLoading && <Loader></Loader>}
      {error && <p>Error</p>}
    </TweetsStyled >
  );
};
export default Tweets;