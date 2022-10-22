/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: '0.5rem',
  },
  large: {
    height: '1.5rem',
    padding: '0.25rem'
  }
}

const ProgressBar = ({ value, size }) => {

  return (
    <Wrapper>
      <ValueDisplay for="progress-bar">{value}</ValueDisplay>
      <ProgressBase id="progress-bar" max="100" value={value} size={SIZES[size]}></ProgressBase>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ValueDisplay = styled.label`
  margin-right: 0.6rem;
  color: ${COLORS.black};  
  &::after {
    content: '%';
  }
`;


const ProgressBase = styled.progress`
  appearance: none;
  height: ${props => props.size ? props.size.height : '0.75rem'};
  width: 12rem;

  &::-webkit-progress-bar {
    border-radius: 10px;
    overflow: hidden;
    background-color: ${COLORS.gray50};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: ${props => props.size?.padding ? props.size.padding : '0rem'};
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${props => {
      if (props.value != '100') {
        return '8px 0px 0px 8px';
      } else {
        return '8px';
      }
    }};
  }
`;

export default ProgressBar;
