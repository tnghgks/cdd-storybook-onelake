import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Button = ({ color, backgroundColor, label, ...props }) => {
  return (
    <DefaultButton $color={color} $backgroundColor={backgroundColor} {...props}>
      {label}
    </DefaultButton>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "#FFFFFF",
  backgroundColor: "#BF4F74",
  primary: false,
  onClick: undefined,
};

const DefaultButton = styled.button`
  color: ${(props) => (props.$color ? props.$color : "#FFFFFF")};
  background-color: ${(props) => (props.$backgroundColor ? props.$backgroundColor : "#BF4F74")};
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;
