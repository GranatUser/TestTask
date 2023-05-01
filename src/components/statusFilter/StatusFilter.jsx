import { useSelector, useDispatch } from "react-redux";
import { selectStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filterSlice";
import { ButtonFilterStyled,FilterButtonGroup } from "./ButtonFilterStyled.styled";

const ButtonFilter = ({ selected = false,
    type = "button",
    children,
    ...otherProps})=>{
        return (
            <ButtonFilterStyled
              className={selected&&'isSelected'}
              type={type}
              {...otherProps}
            >
              {children}
            </ButtonFilterStyled>
          );
}


export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <FilterButtonGroup >
      <ButtonFilter
        selected={filter === 'show all'}
        onClick={() => handleFilterChange('show all')}
      >
       Show all
      </ButtonFilter>
      <ButtonFilter

        selected={filter === 'follow'}
        onClick={() => handleFilterChange('follow')}
      >
        Follow
      </ButtonFilter>
      <ButtonFilter

        selected={filter ==='following'}
        onClick={() => handleFilterChange('following')}
      >
        Following
      </ButtonFilter>
    </FilterButtonGroup>
  );
};