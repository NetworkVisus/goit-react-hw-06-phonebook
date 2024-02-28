import * as Styled from './Filter.styled';
import { useDispatch } from 'react-redux';
import { updateFilterAction } from '../../redux/slices/FilterSlice/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  function handleFilter(event) {
    const searchName = event.target.value;
    dispatch(updateFilterAction(searchName));
  }

  return (
    <Styled.FilterDiv>
      <Styled.Title>Filter</Styled.Title>
      <Styled.InputDiv>
        <Styled.Label htmlFor="filter">Filter Contacts by name</Styled.Label>
        <Styled.Input
          name="filter"
          onChange={handleFilter}
          placeholder="E.g. Aiden Pearce"
        ></Styled.Input>
      </Styled.InputDiv>
    </Styled.FilterDiv>
  );
};
