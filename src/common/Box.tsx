import styled from "styled-components";
import {DefaultAttributeProps, defaultAttributes} from "./common.ts";

type BoxProps = DefaultAttributeProps

const Box = styled.div<BoxProps>`
  ${defaultAttributes}
`


export default Box;
