import styled from "styled-components";
import Chat from '../../image/Chat.png';
import Logo from '../../image/Logo.png';
export const CardUserStyled = styled.div`
width: 380px;
height: 460px;
background-image: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
border-radius: 20px;
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`
export const CanvasStyled = styled.div`

width: 100%;
height: 100%;
background-repeat:no-repeat;
background-position: center top 26px, left 20px top 20px,center center;
background-size: 308px 168px, 76px 22px,100% 8px;
background-image:url(${Chat}),url(${Logo});
border-radius: 20px;


& .box{
    width: 100%;
    height: 100%;
    padding-top: 178px;
    position: relative;
    font-family: 'Montserrat', sans-serif;
}

& .box__img{
    position: relative;
    height: 80px;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
    background-color: #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:1;
    margin-bottom: 26px;
}
& .box__line{
    position: absolute;
    height: 8px;
    width: 100%;
    background-color: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    top: 214px;

}
& img{
display: block;
height: 62px;
width: 62px;
background-color: #5736A3;
border-radius: 50%;
}
& ul{
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin-bottom: 26px;
}
& li{
    text-align: center;
    font-weight: 400;
    color:#EBD8FF;
    font-size: 20px;
    text-transform: uppercase;
    line-height: 1.22;
}

`

export const ButtonFollow = styled.button`
 font-weight: 600;
    text-transform: uppercase;
    display: block;
    border: none;
    height: 50px;
    width: 196px;
    border-radius: 10.3108px;
    background-color:#EBD8FF ;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    font-size: 18px;
    line-height: 1.22;
    margin-left: auto;
    margin-right: auto;
`
export const ButtonFollowing = styled(ButtonFollow)`
     background-color:#5CD3A8 ;
`