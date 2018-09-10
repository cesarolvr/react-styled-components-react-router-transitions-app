import * as React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.svg`
    flex-shrink: 0;
    padding: ${props => props.theme.paddingDefault * 1.4}px ${props => props.theme.paddingDefault * 2}px;
`;

const Logo = () => (
  <StyledLogo width="120px" height="22px" viewBox="0 0 240 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-size="27.0115">
        <text id="CARS" font-family="Rockwell-Regular, Rockwell" font-weight="normal" letter-spacing="-0.7445404" fill="#071629">
            <tspan x="-1" y="21">C</tspan>
            <tspan x="19.7143026" y="21" letter-spacing="0.055">ARS</tspan>
        </text>
        <text id="VENTURES" font-family="Rockwell-Bold, Rockwell" font-weight="bold" letter-spacing="0.055" fill="#C81120">
            <tspan x="81" y="21">VENTURES</tspan>
        </text>
    </g>
</StyledLogo>
);

export default Logo;
