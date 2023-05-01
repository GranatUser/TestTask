import { CardUserStyled,CanvasStyled,ButtonFollow,ButtonFollowing } from "./CardUser.styled";
import { useDispatch } from "react-redux";
import { toggleStatus} from "../../redux/operations";

export const CardUser=(props)=>{
   const dispatch = useDispatch();
   const handleToggle=()=> dispatch(toggleStatus(props.user))


    return (
        <CardUserStyled>
            <CanvasStyled>
                <div className="box">
                <div className="box__line"></div>
                    <div className="box__img">
                        <img src={props.user.avatar} alt="avatar" />
                    </div>
                    <ul>
                        <li>{props.user.tweets} tweets</li>
                        <li>{props.user.followers} Followers</li>
                    </ul>
                    {
                        props.user.status?
                        <ButtonFollowing type="button" onClick={handleToggle}>Following</ButtonFollowing>
                        :
                        <ButtonFollow type="button" onClick={handleToggle}>Follow</ButtonFollow>
                    }
                        
                        
                        

                </div>
            </CanvasStyled>
        </CardUserStyled>
);
}