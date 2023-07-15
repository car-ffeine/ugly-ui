import React, {ReactNode} from 'react';
import styled from 'styled-components';

interface ButtonInterface {
    onClick?: () => void;
    disabled?: boolean;
    backgroundColor?: string;
    textColor?: string;
    fontSize?: number;
    fontWeight?: string | number;
    p?: number;
}

const StyledButton = styled.button<ButtonInterface>`
  background-color: ${({backgroundColor}) => backgroundColor || 'blue'};
  color: ${({textColor}) => textColor || 'white'};
  font-size: ${({fontSize}) => fontSize || 16}px;
  font-weight: ${({fontWeight}) => fontWeight || 'normal'};
  padding: ${({p}) => p || 10}px;
`;

interface ButtonProps extends ButtonInterface {
    children: ReactNode;
}

function Button({
                    onClick,
                    disabled,
                    backgroundColor,
                    textColor,
                    fontSize,
                    fontWeight,
                    p,
                    children,
                }: ButtonProps) {
    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled}
            backgroundColor={backgroundColor}
            textColor={textColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
            p={p}
        >
            {children}
        </StyledButton>
    );
}

export default Button;
