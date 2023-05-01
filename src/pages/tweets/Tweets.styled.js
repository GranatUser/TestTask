import styled from "styled-components";
import { Link } from "react-router-dom";
export const  TweetsStyled = styled.main`
position: relative;
max-width:800px;
min-width:670px;
margin-left: auto;
margin-right: auto;
padding:50px;
`
export const GoBack=styled(Link)`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
color:black;
width: 70px;
height: 30px;
background-color: #C8A2EF;
border-radius: 5px;
&:hover, &:focus{
   color: white;
   background-color: #A8A2EF;
}
`