import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 150,
  size,
  placeholder,
}) => {
  
  return (
    
    
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>

      <InputIcon id={icon} />

      <TextInput 
        placeholder={placeholder}
        size={size}
        width={width + 'px'}
      />
    </Wrapper>
  )
};

const Wrapper = styled.label`
  display: block;
  position: relative;
`

const InputIcon = styled(Icon)`
  position: absolute;
  pointer-events: none;
  height: ${24 / 16}rem;
  top: 0;
  bottom: 0;
  margin: auto;
`

const TextInput = styled.input`
  height: ${24 / 16}rem;
  width: ${props => {
    console.log(props.width)
    return props.width
  }};
  /* width: 400px; */
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding: 1rem 0rem 1rem 2rem;

  &::placeholder {

  }
`



export default IconInput;
