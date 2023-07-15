import styled from "styled-components";
import {ReactNode} from "react";

export interface BoxInterface {
    m?: number;
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
    mx?: number;
    my?: number;
    p?: number;
    pt?: number;
    pb?: number;
    pl?: number;
    pr?: number;
    px?: number;
    py?: number;
    backgroundColor?: string;
}

export const StyledBox = styled.div <BoxInterface>`
  margin-top: ${({mt}) => (mt ? mt * 8 : 0)}px;
  margin-bottom: ${({mb}) => (mb ? mb * 8 : 0)}px;
  margin-left: ${({ml}) => (ml ? ml * 8 : 0)}px;
  margin-right: ${({mr}) => (mr ? mr * 8 : 0)}px;
  margin: ${({m}) => (m ? m * 8 : 0)}px;
  padding-top: ${({pt}) => (pt ? pt * 8 : 0)}px;
  padding-bottom: ${({pb}) => (pb ? pb * 8 : 0)}px;
  padding-left: ${({pl}) => (pl ? pl * 8 : 0)}px;
  padding-right: ${({pr}) => (pr ? pr * 8 : 0)}px;
  padding: ${({p}) => (p ? p * 8 : 0)}px;
  background-color: ${({backgroundColor}) => backgroundColor};
`;

interface BoxProps extends BoxInterface {
    children: ReactNode;
}

function Box({children, m, mt, mb, ml, mr, mx, my, p, pt, pb, pl, pr, px, py, backgroundColor}: BoxProps) {
    return (
        <StyledBox
            m={m}
            mt={mt}
            mb={mb}
            ml={ml}
            mr={mr}
            mx={mx}
            my={my}
            p={p}
            pt={pt}
            pb={pb}
            pl={pl}
            pr={pr}
            px={px}
            py={py}
            backgroundColor={backgroundColor}
        >
            {children}
        </StyledBox>
    );
}

export default Box;
