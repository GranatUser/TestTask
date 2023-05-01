import { CardUser } from "../CardUser/CardUser";
import { useSelector} from "react-redux";
import { selectUsers} from "../../redux/selectors";
import { CardUserListStyled } from "./CardUserList.styled";

export const CardUserList=()=>{
    const users = useSelector(selectUsers) ;
  
    return(
        <CardUserListStyled>
            {
                users.map((user)=>{
                    return(<li key={user.id}>
                        <CardUser user={user}/>
                    </li>)
                    
                })
            }
            <button type='button' >More</button>
        </CardUserListStyled>
    );
}