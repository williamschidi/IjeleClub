// import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SearchButton = styled.li`
  width: 3rem;
  height: 3rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  cursor: pointer;
`;

function Search() {
  const mobile = useMediaQuery({ maxWidth: 600 });
  return (
    <SearchButton>
      <NavLink to="search">
        <HiMagnifyingGlass size={mobile ? 20 : 25} color="grey" />
      </NavLink>
    </SearchButton>
  );
}

export default Search;
