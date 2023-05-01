import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header=styled.header`
    & .container{
        display: flex;
        column-gap: 20px;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        padding:30px;
        border-bottom: 2px solid black;
    }
`


export const MainLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: #AE7BE3;
  }
`;