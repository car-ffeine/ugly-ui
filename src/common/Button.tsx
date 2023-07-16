import styled from "styled-components";
import {DefaultAttributeProps, defaultAttributes} from "./common.ts";

interface ButtonProps extends DefaultAttributeProps {
  variant?: string;
}

const Button = styled.div<ButtonProps>`
  ${defaultAttributes}
`

export default Button;
