import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width,
  size,
  placeholder
}) => {

  const SIZES = {
    small: {
      fontSize: '0.875rem',
      width: '150px',
      iconSize: 16,
      height: '1.5rem',
      border: '1px solid',
    },
    large: {
      fontSize: '1.125rem',
      width: '300px',
      iconSize: 24,
      height: '2.25rem',
      border: '3px solid',
    },
  };

  const currentSize = SIZES[size];

  if(!currentSize) {
    throw new Error(`Invalid size value: ${size}`);
  }
  
  return ( 
    <Wrapper
      fontSize={currentSize.fontSize}
    >
      <VisuallyHidden>{label}</VisuallyHidden>

      <IconWrapper
        size={currentSize.iconSize}
      >
        <Icon id={icon} size={currentSize.iconSize} />
      </IconWrapper>

      <TextInput 
        placeholder={placeholder}
        style={{
          '--width': currentSize.width, '--height': currentSize.height, '--border': currentSize.border,
          '--padding': currentSize.height,
        }} 
      />
    </Wrapper>
  )
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  font-size: ${props => props.fontSize};
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0px;
  height: ${props => props.size}px;
`;

const TextInput = styled.input`
  font: inherit;
  height: var(--height);
  width: var(--width);
  border: none;
  border-bottom: var(--border);
  padding-left: var(--padding);
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
