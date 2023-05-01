import { CardUser } from "../CardUser/CardUser";
import { useSelector} from "react-redux";
import { selectUsers,selectIndex,selectVisibleCards} from "../../redux/selectors";
import { CardUserListStyled } from "./CardUserList.styled";
import { setIndex } from "../../redux/indexSlice";
import { useDispatch } from "react-redux";
import { ButtonFollow } from "components/CardUser/CardUser.styled";



export const CardUserList=()=>{
    const dispatch = useDispatch();
    const users = useSelector(selectUsers) ;
    const index = useSelector(selectIndex);
    const visibleUsers = useSelector(selectVisibleCards);
    return(
        <CardUserListStyled>
            {
                visibleUsers.map((user)=>{
                    return(<li key={user.id}>
                        <CardUser user={user}/>
                    </li>)
                    
                })
            }
            {
                !(index>users.length)&& <ButtonFollow style={{marginBottom:'20px'}} type='button' onClick={()=>{dispatch(setIndex())}} >More</ButtonFollow>
            }
           
        </CardUserListStyled>
    );
}