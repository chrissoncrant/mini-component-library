import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  console.log('test', children);


  return (
    <Wrapper>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <Presentation>
        {displayedValue}
      </Presentation>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  font-size: 4rem;
  width: max-content;
`;

const SelectElement = styled.select`
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  font: inherit;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
`;

const Presentation = styled.div`
  position: relative;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1em;
  padding: 0.75em 1em 0.65em;
  padding-right: 4em;
  border-radius: 0.3em;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 1em;
    bottom: 0;
    margin: auto;
    box-sizing: border-box;
    width: 0.5em;
    height: 0.5em;
    border-bottom: 0.2em solid;
    border-right: 0.2em solid;
    transform: rotate(45deg);
  }

  ${SelectElement}:hover + & {
    background-color:rgb(176, 176, 176);
    color: black;
  }

  ${SelectElement}:focus + & {
    outline: 0.15em solid slateblue;   
    background-color:rgb(176, 176, 176);
    color: black;
  }
`;

export default Select;
