import {css} from "styled-components";

export interface DefaultAttributeProps {
  $mt?: number;
  $backgroundColor?: string;
}

export const defaultAttributes = css<DefaultAttributeProps>`
  margin-top: ${({$mt}) => ($mt ? $mt * 8 : 0)}px;
  background-color: ${({$backgroundColor}) => ($backgroundColor ? $backgroundColor : '')};
`
