import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.input`
  background-color: ${props => props.theme.bgColor};
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  height: 35px;
  padding: 0 15px;
  font-size: 12px;
`;

const Input = ({placeholder, required = true, value, onChange, type="text", className }) => (
  <Container placeholder={placeholder} required={required} value={value} onChange={onChange} type={type} className={className} />
);

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

