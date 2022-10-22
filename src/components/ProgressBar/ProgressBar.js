/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: '0.5rem',
  },
  medium: {
    height: '0.75rem',
  },
  large: {
    height: '1rem',
    padding: '0.25rem',
  }
}

const ProgressBar = ({ value, size }) => {

  const currentSize = SIZES[size];

  if (!currentSize) {
    throw new Error(`Unknown size value passed into ProgressBar: ${size}`)
  };

  return (
    <Wrapper
      role="progressBar"
      aria-valuenow={value}
      aria-aria-valuemin="0"
      aria-aria-valuemax="100"
      padding={currentSize.padding}
      size={size}
    >
      <VisuallyHidden>90%</VisuallyHidden>
      <BarWrapper size={size}>
        <Bar size={currentSize} style={{'--width': value + '%'}}/>
      </BarWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: ${props => props.size === 'large' ? '12px' : '4px'};
  padding: ${props => props.padding};

  /* Trim progress bar corners */
  overflow: hidden;
`;

const BarWrapper = styled.div`
  /* Trim progress bar corners for large size */
  overflow: hidden;
  border-radius: ${props => props.size === 'large' ? '8px' : '4px'};
`;

const Bar = styled.div`
  width: var(--width);
  height: ${props => props.size.height};
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
