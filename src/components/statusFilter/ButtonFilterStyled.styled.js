import styled from "styled-components";

export const  ButtonFilterStyled  = styled.button`
    display: inline-flex;
    padding: 8px 12px;
    border-radius: 4px;
    border: none;
    font: inherit;
    cursor: pointer;
    background-color: #EBD8FF;
    color: inherit;

    &.isSelected {
    background-color: #5CD3A8;
    color: #fff;
  }

  &:hover {
    background-color: #5CD3A8;
    color: #fff;
  }
  
  &:active {
    background-color: #5CD3A8;
    color: #fff;
  }

`
export const FilterButtonGroup = styled.div`
width: fit-content;
display: flex;
column-gap: 20px;
margin-bottom: 20px;
margin-left: auto;
margin-right: auto;
`

  
